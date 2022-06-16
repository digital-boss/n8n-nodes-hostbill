import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export interface IHostBillApiCredentials {
	server: string;
	apiId: string;
	apiKey: string;
}

export class HostBillApi implements ICredentialType {
	name = 'hostBillApi';
	displayName = 'HostBill API';
	documentationUrl = 'hostBill';
	properties: INodeProperties[] = [
		{
			displayName: 'HostBill Server',
			name: 'server',
			type: 'string',
			default: 'http://api.hostbillapp.com',
		},
		{
			displayName: 'HostBill API ID',
			name: 'apiId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'HostBill API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}
