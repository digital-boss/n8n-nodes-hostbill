import { INodeProperties } from "n8n-workflow";

export const clientFields: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"default": "getAll",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				]
			}
		},
		"options": [
			{
				"name": "Create",
				"value": "create"
			},
			{
				"name": "Delete",
				"value": "delete"
			},
			{
				"name": "Get",
				"value": "get"
			},
			{
				"name": "Get All",
				"value": "getAll"
			},
			{
				"name": "Get Domains",
				"value": "getDomains"
			},
			{
				"name": "Update",
				"value": "update"
			},
			{
				"name": "Verify Login",
				"value": "verifyLogin"
			}
		]
	},
	{
		"name": "firstname",
		"displayName": "First name",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "lastname",
		"displayName": "Last name",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "email",
		"displayName": "Email",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "password",
		"displayName": "Password",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "password2",
		"displayName": "Confirm Password",
		"type": "string",
		"description": "Password confirmation (same as password)",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "optionalFields",
		"displayName": "Optional Fields",
		"type": "collection",
		"required": true,
		"default": [],
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"create"
				]
			}
		},
		"options": [
			{
				"name": "notifyclient",
				"displayName": "Notify Client",
				"type": "boolean",
				"description": "Enable if you wish to send customer his login details",
				"required": false,
				"default": false
			},
			{
				"name": "type",
				"displayName": "Type",
				"type": "options",
				"description": "Client type - Private or Company values allowed here",
				"required": false,
				"default": "",
				"options": [
					{
						"name": "Private",
						"value": "Private"
					},
					{
						"name": "Company",
						"value": "Company"
					}
				]
			},
			{
				"name": "language",
				"displayName": "Language",
				"type": "string",
				"description": "Customer default language, value has to be one of enabled languages",
				"required": false,
				"default": ""
			},
			{
				"name": "companyname",
				"displayName": "Company Name",
				"type": "string",
				"description": "Customer's company name (if any)",
				"required": false,
				"default": ""
			},
			{
				"name": "phonenumber",
				"displayName": "Phone Number",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "address1",
				"displayName": "Address Line 1",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "address2",
				"displayName": "Address Line 2",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "city",
				"displayName": "City",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "state",
				"displayName": "State",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "postcode",
				"displayName": "Post Code",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "country",
				"displayName": "Country",
				"type": "string",
				"required": false,
				"default": ""
			}
		]
	},
	{
		"name": "id",
		"displayName": "Client ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"delete"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Client ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"get"
				]
			}
		}
	},
	{
		"name": "page",
		"displayName": "Page",
		"type": "number",
		"description": "Which page to return",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"getAll"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Client ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"getDomains"
				]
			}
		}
	},
	{
		"name": "page",
		"displayName": "Page",
		"type": "number",
		"description": "Which page to return",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"getDomains"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Client ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"update"
				]
			}
		}
	},
	{
		"name": "optionalFields",
		"displayName": "OptionalFields",
		"type": "collection",
		"required": true,
		"default": [],
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"update"
				]
			}
		},
		"options": [
			{
				"name": "firstname",
				"displayName": "First name",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "lastname",
				"displayName": "Last name",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "companyname",
				"displayName": "Company Name",
				"type": "string",
				"description": "Company name for organization type",
				"required": false,
				"default": ""
			},
			{
				"name": "address1",
				"displayName": "Address Line 1",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "address2",
				"displayName": "Address Line 2",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "city",
				"displayName": "City",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "state",
				"displayName": "State",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "postcode",
				"displayName": "Post Code",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "country",
				"displayName": "Country",
				"type": "string",
				"required": false,
				"default": ""
			},
			{
				"name": "phonenumber",
				"displayName": "Phone Number",
				"type": "string",
				"required": false,
				"default": ""
			}
		]
	},
	{
		"name": "email",
		"displayName": "Email",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"verifyLogin"
				]
			}
		}
	},
	{
		"name": "password",
		"displayName": "Password",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"client"
				],
				"operation": [
					"verifyLogin"
				]
			}
		}
	}
]