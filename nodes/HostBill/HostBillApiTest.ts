
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

	try {
		await this.helpers.request!(options);
	} catch (error) {
		return {
			status: 'Error',
			message: `Connection details not valid: ${(error as JsonObject).message}`,
		};
	}

	return {
		status: 'OK',
		message: 'Authentication successful!',
	};
}
