// tslint:disable: no-any

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

export type Mappers = {[mapper: string]: (value: any) => string | undefined};

type Dict<T> = {[key: string]: T};

export const normalizeHost = (hostName: string) => hostName.replace(/\/$/, '');

const pick = (obj: IDataObject, props: string[]) => props.reduce((acc, i) => {
	acc[i] = obj[i];
	return acc;
}, {} as IDataObject);

export class OperationExecutor {
	private indexItem = 0;
	private execFns: IExecuteFunctions;
	private credentials: IHostBillApiCredentials;

	private reqMappers: Mappers;
	private responseMappers: Record<string, (src: any) => any>;
	private nodeDescr: INode;
	private resourceName: string;
	private operationName: string;

	private operation: IOperation;

	constructor (
		nodeDescr: INode,
		reqMappers: Mappers,
		responseMappers: Mappers,
		resourceName: string,
		opearationName: string,
		execFns: IExecuteFunctions,
		creds: IHostBillApiCredentials,
	) {
		this.nodeDescr = nodeDescr;
		this.reqMappers = reqMappers;
		this.responseMappers = responseMappers;
		this.resourceName = resourceName;
		this.operationName = opearationName;
		this.execFns = execFns;
		this.credentials = creds;

		this.operation = this.nodeDescr.resources[this.resourceName].operations[this.operationName];
	}

	mapValue = (mapName: string, value: any): string | undefined => {
		const mapFn = this.reqMappers[mapName];
		if (mapFn !== undefined) {
			return mapFn(value);
		} else {
			throw new NodeOperationError(this.execFns.getNode(), `Format '${mapName}' is not registered.`);
		}
	}

	getParamValue = (param: IParam): any => {
		const value = this.execFns.getNodeParameter(param.name, this.indexItem) as unknown;
		if (param.map) {
			return this.mapValue(param.map, value);
		}
		return value;
	}

	formatPrivileges = (dict: Dict<number>): IDataObject => {
		return Object.keys(dict).reduce((acc, item) => {
			const [category, priv] = item.split('_');
			acc[category] = acc[category] ? acc[category] : {};
			acc[category][priv] = dict[item];
			return acc;
		}, {} as any);
	}

	getCollectionParams = (collectionParam: IParam): Array<[string, string | IDataObject | undefined]> => {
		if (collectionParam.type !== 'collection') {
			throw new NodeOperationError(this.execFns.getNode(), `Invalid param type '${collectionParam.type}'. Expected collection.`);
		}

		const params = (this.operation.params || []) as IParam[];
		const dict = this.getParamValue(collectionParam) as Record<string, any>;

		if (collectionParam.name === 'privileges') {
			return [[collectionParam.name, this.formatPrivileges(dict)]];
		} else {
			return Object.keys(dict).map(key => {
				const p = params.find(i => i.name === key);
				const value = dict[key];
				const mappedValue = p && p.map
					? this.mapValue(p.map, key)
					: value as string;
				const result: [string, string | undefined] = [key, mappedValue];
				return result;
			});
		}
	}

	getParams = (): Record<string, string | IDataObject | undefined> => {
		const params = (this.operation.params || []) as IParam[];

		const primaryParams = params.filter(i => i.type !== 'collection');
		const collectParams = params.filter(i => i.type === 'collection');

		const primaryValues: Array<[string, string?]> = primaryParams.map(p => [p.name, this.getParamValue(p)]);
		const collectionsValues: Array<[string, string | IDataObject | undefined]> = collectParams.map(this.getCollectionParams).flat();

		return Array.prototype
			.concat(primaryValues, collectionsValues)
			.filter(([_, value]) => value !== undefined)
			.reduce((acc, [key, value]) => {
				acc[key] = value;
				return acc;
			}, {} as Record<string, string>);
	}

	protected buildRequest = (params: Record<string, string | IDataObject | undefined>, call: string): OptionsWithUri => {
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
		const responseMap = this.operation.responseMap || this.responseMappers[this.operation.path || ''];

		if (responseMap === undefined) {
			return undefined;
		}
		else if (typeof responseMap === 'function') {
			return responseMap;
		}
		else if (typeof responseMap === 'string') {
			return (res: any) => res[responseMap];
		} else if (responseMap instanceof Array) {
			return (res: any) => pick(res, responseMap);
		} else {
			throw new NodeOperationError(this.execFns.getNode(), `Invalid responceMap type for operation ${this.operationName}.`);
		}
	}

	protected strip = (transformer?: (res: any) => any) => (res: any) => {
		if (res.success) {
			return transformer ? transformer(res) : res;
		} else {
			throw new NodeApiError(this.execFns.getNode(), res, { message: res.errMsg });
		}
	}

	execute = async (indexItem: number): Promise<any> => {
		this.indexItem = indexItem;
		const [_, call] = this.operation.path!.split('/');

		const params = this.getParams();
		const opts = this.buildRequest(params, call);

		return await this.execFns.helpers.request!(opts).then(this.strip(this.getResponseMapper()));
	}
}
