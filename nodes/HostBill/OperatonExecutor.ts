import {
	CoreOptions,
	OptionsWithUri,
} from 'request';

import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';
import { IDataObject, NodeApiError, NodeOperationError } from 'n8n-workflow';

import { IHostBillApiCredentials } from '../../credentials/HostBillApi.credentials';
import { INode, IOperation, IParam } from '../../generator/compactTypes';

// tslint:disable-next-line: no-any
export type Mappers = {[mapper: string]: (value: any) => string | undefined};

type Dict<T> = {[key: string]: T};

export const normalizeHost = (hostName: string) => hostName.replace(/\/$/, '');

// tslint:disable-next-line: no-any
const pick = (obj: any, props: string[]) => props.reduce((acc, i) => {
	acc[i] = obj[i];
	return acc;
// tslint:disable-next-line: no-any
}, {} as any);

export class OperationExecutor {
	private indexItem = 0;
	private execFns: IExecuteFunctions;
	private credentials: IHostBillApiCredentials;

	private reqMappers: Mappers;
	private nodeDescr: INode;
	private resourceName: string;
	private operationName: string;

	private operation: IOperation;

	constructor (
		nodeDescr: INode,
		reqMappers: Mappers,
		resourceName: string,
		opearationName: string,
		execFns: IExecuteFunctions,
		creds: IHostBillApiCredentials,
	) {
		this.nodeDescr = nodeDescr;
		this.reqMappers = reqMappers;
		this.resourceName = resourceName;
		this.operationName = opearationName;
		this.execFns = execFns;
		this.credentials = creds;

		this.operation = this.nodeDescr.resources[this.resourceName].operations[this.operationName];
	}

	// tslint:disable-next-line: no-any
	mapValue = (mapName: string, value: any): string | undefined => {
		const mapFn = this.reqMappers[mapName];
		if (mapFn !== undefined) {
			return mapFn(value);
		} else {
			throw new NodeOperationError(this.execFns.getNode(), `Format '${mapName}' is not registered.`);
		}
	}

	// tslint:disable-next-line: no-any
	getParamValue = (param: IParam): any => {
		const value = this.execFns.getNodeParameter(param.name, this.indexItem) as unknown;
		if (param.map) {
			return this.mapValue(param.map, value);
		}
		return value;
	}

	// tslint:disable-next-line: no-any
	formatPrivileges = (dict: Dict<number>): any => {
		return Object.keys(dict).reduce((acc, item) => {
			const [category, priv] = item.split('_');
			acc[category] = acc[category] ? acc[category] : {};
			acc[category][priv] = dict[item];
			return acc;
		// tslint:disable-next-line: no-any
		}, {} as any);
	}

	// tslint:disable-next-line: no-any
	getCollectionParams = (collectionParam: IParam): Array<[string, any?]> => {
		if (collectionParam.type !== 'collection') {
			throw new NodeOperationError(this.execFns.getNode(), `Invalid param type '${collectionParam.type}'. Expected collection.`);
		}

		const params = this.operation.params as IParam[];
		// tslint:disable-next-line: no-any
		const dict = this.getParamValue(collectionParam) as {[key: string]: any};

		if (collectionParam.name === 'privileges') {
			return [[collectionParam.name, this.formatPrivileges(dict)]];
		} else {
			return Object.keys(dict).map(key => {
				const p = params.find(i => i.name === key);
				const value = dict[key];
				const mappedValue = p && p.map
					? this.mapValue(p.map, key)
					: value as string;
				const result: [string, string?] = [key, mappedValue];
				return result;
			});
		}
	}

	// tslint:disable-next-line: no-any
	getParams = (): Dict<any> => {
		const params = this.operation.params as IParam[];

		const primaryParams = params.filter(i => i.type !== 'collection');
		const collectParams = params.filter(i => i.type === 'collection');

		const primaryValues: Array<[string, string?]> = primaryParams.map(p => [p.name, this.getParamValue(p)]);
		// tslint:disable-next-line: no-any
		const collectionsValues: Array<[string, any?]> = collectParams.map(this.getCollectionParams).flat();

		return Array.prototype
			.concat(primaryValues, collectionsValues)
			.filter(([_, value]) => value !== undefined)
			.reduce((acc, [key, value]) => {
				acc[key] = value;
				return acc;
			}, {} as Dict<string>);
	}

	protected buildRequest = (params: Dict<string>, call: string): OptionsWithUri => {
		const credParams: Dict<string> = {
			'api_id': this.credentials.apiId,
			'api_key': this.credentials.apiKey,
			'call': call,
		};
		return {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			uri: normalizeHost(this.credentials.server) + '/admin/api.php',
			json: true,
			qs: Object.assign(credParams, params),
		};
	}

	private getResponseMapper = () => {
		const requestMap = this.operation.responseMap;
		if (requestMap === undefined) {
			return undefined;
		}
		else if (typeof requestMap === 'string') {
			// tslint:disable-next-line: no-any
			return (res: any) => res[requestMap];
		} else if (requestMap instanceof Array) {
			// tslint:disable-next-line: no-any
			return (res: any) => pick(res, requestMap);
		} else {
			throw new NodeOperationError(this.execFns.getNode(), `Invalid responceMap type for operation ${this.operationName}.`);
		}
	}

	// tslint:disable-next-line: no-any
	protected strip = (transformer?: (res: any) => any) => (res: any) => {
		if (res.success) {
			return transformer ? transformer(res) : res;
		} else {
			throw new NodeApiError(this.execFns.getNode(), res, { message: res.errMsg });
		}
	}

	// tslint:disable-next-line: no-any
	execute = async (indexItem: number): Promise<any> => {
		this.indexItem = indexItem;
		const [_, call] = this.operation.path!.split('/');

		const params = this.getParams();

		const opts = this.buildRequest(params, call);



		return await this.execFns.helpers.request!(opts).then(this.strip(this.getResponseMapper()));
	}
}
