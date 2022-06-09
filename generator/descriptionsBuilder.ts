import { fstat } from 'fs';
import {
	INodeProperties, INodePropertyCollection, INodePropertyOptions
} from 'n8n-workflow';
import { INode, IOperation, IOperations, IOption, IParam, IResources } from './compactTypes';


const getResourcesParam = (res: IResources): INodeProperties => {
	const options: INodePropertyOptions[] = Object.keys(res).map(name => ({
		name: res[name].display,
		value: name,
	}));

	return {
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options,
		default: options[0].value,
	};
};

const getOperationsParam = (ops: IOperations, defaultOp: string, resourceName: string): INodeProperties => {
	const options: INodePropertyOptions[] = Object.keys(ops).map(name => {
		const op = ops[name];
		return {
			name: op.display,
			value: op.name,
			description: op.desc,
		};
	});

	return {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: defaultOp,
		displayOptions: {
			show: {
				resource: [resourceName],
			},
		},
		options,
	};
};

const mapOption = (opt: IOption): INodePropertyOptions => {
	return {
		name: opt.name,
		value: opt.value,
		// ToDo: add description
	};
};

const mapParam = (param: IParam, display?: [res: string, op: string]): INodeProperties  => {
	const result: INodeProperties = {
		name: param.name,
		displayName: param.display,
		type: param.type,
		description: param.desc,
		required: param.required,
		default: param.default,

	};
	if (display) {
		result.displayOptions = {
			show: {
				resource: [display[0]],
				operation: [display[1]],
			},
		};
	}
	if (param.options) {
		if (param.type === 'collection') {
			result.options = param.options.map(i => mapParam(i as IParam)); // do not pass display to options fields - that is unnecessary
		} else {
			result.options = param.options.map(i => mapOption(i as IOption));
		}
	}
	return result;
};

const getParams = (op: IOperation, resourceName: string): INodeProperties[] => {
	return (op.params as IParam[]).map(p => mapParam(p, [resourceName, op.name]));
};

export type DescriptionsDict = {[key: string]: INodeProperties | INodeProperties[]};

export const generateDescriptions = (node: INode): DescriptionsDict => {
	const result: DescriptionsDict = {};
	const resource = getResourcesParam(node.resources);
	result.resources = resource;

	Object.keys(node.resources).map(resName => {
		const r = node.resources[resName];
		const operations = getOperationsParam(r.operations, r.defaultOperation, resName);
		const fields = Object.keys(r.operations).map(opName => {
			return getParams(r.operations[opName], resName);
		}).flat();

		result[resName + 'Fields'] = [
			operations,
			...fields,
		];
	});

	return result;
};
