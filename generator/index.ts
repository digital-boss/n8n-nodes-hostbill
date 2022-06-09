// tslint:disable: no-any

import $RefParser from '@apidevtools/json-schema-ref-parser';
import yaml from 'js-yaml';
import fs from 'fs';
import { NodePropertyTypes } from 'n8n-workflow';
import { INode, IOperation, IParam, IResource, Option, Param } from './compactTypes';
import { Dict } from './types';
import { generateDescriptions } from './descriptionsBuilder';


/******************************************************************************
 * Generic functions
 */

const mapArr = <T>(src: T[], node: INode, mappers: Array<(item: T, node: INode) => T>): T[] => {
	return src.map(i => {
		mappers.forEach(m => i = m(i, node));
		return i;
	});
};

const mapDict = <T>(
	src: Dict<T>,
	node: INode,
	mappers: Array<(item: T, node: INode, key: string) => T>,
) => {
	return Object.keys(src).reduce((acc, item) => {
		acc[item] = src[item];
		mappers.forEach(m => acc[item] = m(acc[item], node, item));
		return acc;
	}, {} as Dict<T>);
};


/******************************************************************************
 * Utils, Helpers
 */

const cap1st = (i: string): string => i[0].toUpperCase() + i.slice(1);

const toYaml = (obj: any) => {
	return yaml.dump(obj, {
		noRefs: true,
	});
};


/******************************************************************************
 * Business logic
 */

const getPathFromSpec = (url: string) => url.match(/:\/\/([^\/]+)\/(.+)\/$/)![2];

const getDefaultForType = (type?: NodePropertyTypes): any => {
	switch (type) {
		case 'boolean':
			return false;
		case 'collection':
			return [];
		case 'dateTime':
			return '';
		case 'fixedCollection':
			return [];
		case 'number':
			return 0;
		case 'string':
			return '';
		case 'options':
			return '';
		// Not implemented:
		// case 'color':
		// 	return
		// case 'hidden':
		// 	return
		// case 'json':
		// 	return
		// case 'notice':
		// 	return
		// case 'multiOptions':
		// 	return

		// case 'credentialsSelect':
		// 	return
		default:
			throw new Error(`Not implemented default for type: ${type}`);
	}
};


/**
 * Mappers
 */

//#region Options mappers

const optFromString = (option: Option, node: INode): Option => {
	if (typeof option === 'string') {
		return {
			value: option,
		};
	}
	return option;
};

const optAddName = (option: Option, node: INode): Option => {
	if (typeof option === 'object' && option.name === undefined) {
		return {
			...option,
			name: cap1st(option.value),
		};
	}
	return option;
};
//#endregion Options mappers

//#region Param mappers

const paramFromModel = (param: Param, node: INode): IParam => {
	if (typeof param === 'string') {
		const [modelName, fieldName] = param.split('.');
		const model = node.models[modelName];
		const field = model.find(f => f.name === fieldName);
		if (!field) {
			throw new Error(`Field not found '${param}'`);
		}
		return field;
	}
	return param;
};

// By default params are required
const paramAddRequired = (param: Param, node: INode): Param => {
	if (typeof param === 'object' && param.required === undefined) {
		param.required = true;
	}
	return param;
};

// Default type is string
const paramAddType = (param: Param, node: INode): Param => {
	if (typeof param === 'object' && param.type === undefined) {
		param.type = 'string';
	}
	return param;
};

// Add default value corresponding to type
const paramAddDefault = (param: Param, node: INode): Param => {
	if (typeof param === 'object' && param.default === undefined) {
		param.default = getDefaultForType(param.type);
	}
	return param;
};

const paramAddDisplay = (param: Param, node: INode): Param => {
	if (typeof param === 'object' && param.display === undefined) {
		param.display = cap1st(param.name);
	}
	return param;
};
//#endregion Param mappers

const mapParam = (param: Param, node: INode): Param => {
	[
		paramFromModel,
		paramAddRequired,
		paramAddType,
		paramAddDefault,
		paramAddDisplay,
	].forEach(m => param = m(param, node));
	return param;
};

const mapParamRec = (param: Param, node: INode): Param => {
	if (typeof param === 'object') {
		if (param.options !== undefined) {
			const options = param.type === 'collection'
				? mapArr(param.options as Param[], node, [
						paramFromModel,
						(p: Param, _: INode) => typeof p === 'object' ?  ({...p, required: false}) : p,
						mapParamRec
					])
				: param.type === 'options'
				? mapArr(param.options as Option[], node, [
					optFromString,
					optAddName,
				])
				: param.options;

				return mapParam({
					...param,
					options,
				}, node);
		}
	}
	return mapParam(param, node);
};

const mapOperation = (op: IOperation, node: INode, key: string): IOperation => {
	//const path = getPathFromSpec(op.spec);
	return {
		...op,
		name: op.name ? op.name : key,
		display: op.display ? op.display : cap1st(key),
		path: getPathFromSpec(op.spec),
		method: 'GET',
		params: mapArr(op.params, node, [mapParamRec]),
	};
};

const mapResource = (resource: IResource, node: INode, key: string): IResource => {
	return {
		...resource,
		display: resource.display ? resource.display : cap1st(key),
		operations: mapDict(resource.operations, node, [mapOperation]),
	};
};


/**
 * Main functions
 */

const normalizeNodeDesc = (node: INode): INode => {
	return {
		...node,
		resources: mapDict(node.resources, node, [mapResource]),
	};
};

const outDir = 'nodes/HostBill/descriptions';

const getJsModule = (json: any, name: string): string => {
	const str = JSON.stringify(json, undefined, "\t");
	const type = name === 'resources' ? 'INodeProperties' : 'INodeProperties[]';
	return `import { INodeProperties } from "n8n-workflow";

export const ${name}: ${type} = ${str}`;
};

const process = (node: INode) => {
	const normNode = normalizeNodeDesc(node);
	const descriptionsDict = generateDescriptions(normNode);

	fs.writeFileSync(`${outDir}/norm.json`, JSON.stringify(normNode, undefined, 2), 'utf-8');
	fs.writeFileSync(`${outDir}/norm.yaml`, toYaml(normNode), 'utf-8');

	Object.keys(descriptionsDict).map(key => {
		const props = descriptionsDict[key];

		fs.writeFileSync(`${outDir}/${key}.ts`, getJsModule(props, key), 'utf-8');
	});
};


/******************************************************************************
 * Entrypoint
 */

const doc = {
	$ref: 'nodes/HostBill/HostBill.description.yaml',
};

$RefParser.dereference(doc, (err, schema) => {
	if (err) {
		console.error(err);
	} else {
		// `schema` is just a normal JavaScript object that contains your entire JSON Schema,
		// including referenced files, combined into a single object
		process(schema as INode);
		//console.log(JSON.stringify(schema, undefined, 2));
	}
});