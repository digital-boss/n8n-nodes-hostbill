import { NodePropertyTypes } from "n8n-workflow";

export type Option = IOption | string;

export interface IOption {
	name?: string;
	value: string;
}

// ToDo: use here original INodeProperties
export interface IParam {
	name: string;
	display?: string;
	type?: NodePropertyTypes;
	desc?: string;
	required?: boolean;
	default?: string;
	options?: Param[] | Option[];
}

export type Param = IParam | string;

export interface IOperation {
	spec: string;
	params: Param[];
	name?: string;
	display?: string;
	desc?: string;
	path?: string;
	method?: string;
}

export interface IOperations {[name: string]: IOperation;}

export interface IResource {
	display?: string;
	desc?: string;
	operations: IOperations;
	defaultOperation: string;
}

export interface IResources { [name: string]: IResource; }

export interface INode {
	resources: IResources;
	def: { [key: string]: any };
	models: { [name: string]: IParam[] };
}