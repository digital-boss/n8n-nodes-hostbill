import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export interface HostBillApiCredentials {
	server: string;
	apiKey: string;
}

export class HostBillApi implements ICredentialType {
	name = 'hostBillApi';
	displayName = 'HostBill API';
	documentationUrl = 'hostBill';
	properties: INodeProperties[] = [
		{
			displayName: 'iBILL Server',
			name: 'server',
			type: 'string',
			default: 'http://api.hostbillapp.com',
		},
		{
			displayName: 'iBILL API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}
