
import {
	OptionsWithUri,
} from 'request';

import {
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	INodeCredentialTestResult,
	JsonObject,
} from 'n8n-workflow';
import { IHostBillApiCredentials } from '../../credentials/HostBillApi.credentials';
import { normalizeHost } from './OperatonExecutor';

const fail = (message: string): INodeCredentialTestResult => ({
	status: 'Error',
	message,
});

export async function hostBillApiTest(this: ICredentialTestFunctions, credentials: ICredentialsDecrypted): Promise<INodeCredentialTestResult> {
	const creds = credentials.data as unknown as IHostBillApiCredentials;

	const options: OptionsWithUri = {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		uri: normalizeHost(creds.server) + '/admin/api.php',
		json: true,
		qs: {
			'api_id': creds.apiId,
			'api_key': creds.apiKey,
			'call': 'getHostBillversion',
		},
	};

	let response;
	try {
		response = await this.helpers.request!(options);
	} catch (error) {
		return fail(`Connection failed: ${(error as JsonObject).message}`);
	}

	if (response.success === true) {
		return {
			status: 'OK',
			message: 'Authentication successful!',
		};
	}

	return fail(`Connection failed: ${response.error}`);
}
