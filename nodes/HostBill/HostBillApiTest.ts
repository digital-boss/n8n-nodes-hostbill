
import {
	OptionsWithUri,
} from 'request';

import {
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	INodeCredentialTestResult,
	JsonObject,
} from 'n8n-workflow';
import { HostBillApiCredentials } from '../../credentials/HostBillApi.credentials';

export async function hostBillApiTest(this: ICredentialTestFunctions, credentials: ICredentialsDecrypted): Promise<INodeCredentialTestResult> {
	// ToDo: How to test credentials?
	return {
		status: 'OK',
		message: 'Authentication successful!',
	};
}
