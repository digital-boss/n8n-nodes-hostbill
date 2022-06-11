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

import { HostBillApiCredentials } from '../../credentials/HostBillApi.credentials';
import { INode, IOperation, IParam } from '../../generator/compactTypes';

export type Mappers = {[mapper: string]: (value: any) => string | undefined};

const normalizeHost = (hostName: string) => hostName.replace(/\/$/, '');

const pick = (obj: any, props: string[]) => props.reduce((acc, i) => {
	acc[i] = obj[i];
	return acc;
}, {} as any);

export class OperationExecutor {
	private indexItem = 0;
	private execFns: IExecuteFunctions;
	private credentials: HostBillApiCredentials;

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
		creds: HostBillApiCredentials,
	) {
		this.nodeDescr = nodeDescr;
		this.reqMappers = reqMappers;
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

	getParams = (): Array<[string, string]> => {
		const params = this.operation.params as IParam[];

		const primaryParams = params.filter(i => i.type !== 'collection');
		const collectParams = params.filter(i => i.type === 'collection');

		const primaryValues: Array<[string, string?]> = primaryParams.map(p => [p.name, this.getParamValue(p)]);

		const collectionsValues: Array<[string, string?]> = collectParams.map(i => {
			const dict = this.getParamValue(i) as {[key: string]: any};
			return Object.keys(dict).map(key => {
				const p = params.find(i => i.name === key);
				const value = dict[key];
				const mappedValue = p && p.map
					? this.mapValue(p.map, key)
					: value as string;
				const result: [string, string?] = [key, mappedValue];
				return result;
			});
		})
		.flat();

		return Array.prototype
			.concat(primaryValues, collectionsValues)
			.filter(([_, value]) => value !== undefined);
	}

	protected buildRequest = (params: Array<[string, string]>, call: string): OptionsWithUri => {
		return {
			method: 'GET',
			uri: normalizeHost(this.credentials.server) + '/admin/api.php',
			json: true,
			qs: [
				['api_id', this.credentials.apiId],
				['api_key', this.credentials.apiKey],
				['call', call],
			].concat(params),
		};
	}

	private getResponseMapper = () => {
		const requestMap = this.operation.responseMap;
		if (requestMap === undefined) {
			return undefined;
		}
		else if (typeof requestMap === 'string') {
			return (res: any) => res[requestMap];
		} else if (requestMap instanceof Array) {
			return (res: any) => pick(res, requestMap);
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
