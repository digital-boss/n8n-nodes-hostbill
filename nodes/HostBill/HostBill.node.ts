
import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

import {
	OperationExecutor,
} from './GenericFunctions';

import { version } from '../version';
import { HostBillApiCredentials } from '../../credentials/HostBillApi.credentials';
import { resourceTypes } from './Resources';
import { hostBillApiTest } from './HostBillApiTest';


export class HostBill implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HostBill',
		name: 'hostBill',
		icon: 'file:hostBill.png',
		group: [],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: `Consume HostBill API (v.${version})`,
		defaults: {
			name: 'HostBill',
			color: '#c8d1df',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'hostBillApi',
				required: true,
				testedBy: 'hostBillApiTest',
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Client',
						value: 'client',
					},
					{
						name: 'Billing',
						value: 'billing',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Service',
						value: 'service',
					},
					{
						name: 'Domain',
						value: 'domain',
					},
				],
				default: 'customer',
			},
			// fields
		],
	};

	methods = {
		credentialTest: {
			hostBillApiTest,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const credentials = await this.getCredentials('hostBillApi') as unknown as HostBillApiCredentials;
		const items = this.getInputData();
		const length = items.length;
		const returnData: IDataObject[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operationName = this.getNodeParameter('operation', 0) as string;

		let operation: OperationExecutor;
		try {
			operation = new OperationExecutor(resourceTypes, resource, operationName, this, credentials);
		} catch (error) {
			throw new NodeOperationError(this.getNode(), error);
		}

		for (let itemIndex = 0; itemIndex < length; itemIndex++) {
			try {
				const result = await operation.execute(itemIndex);
				if (result.constructor === Array) {
					returnData.push.apply(returnData, result);
				} else {
					returnData.push(result);
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}
