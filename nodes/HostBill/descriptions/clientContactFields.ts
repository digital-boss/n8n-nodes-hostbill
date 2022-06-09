import { INodeProperties } from "n8n-workflow";

export const clientContactFields: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"default": "getByClient",
		"displayOptions": {
			"show": {
				"resource": [
					"clientContact"
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
				"name": "Get by Client",
				"value": "getByClient"
			},
			{
				"name": "Update",
				"value": "update"
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
					"clientContact"
				],
				"operation": [
					"create"
				]
			}
		}
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
					"clientContact"
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
					"clientContact"
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
					"clientContact"
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
					"clientContact"
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
					"clientContact"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "Optional Fields",
		"displayName": "Optional Fields",
		"type": "collection",
		"required": true,
		"default": [],
		"displayOptions": {
			"show": {
				"resource": [
					"clientContact"
				],
				"operation": [
					"create"
				]
			}
		},
		"options": [
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
		"name": "client_id",
		"displayName": "Contact ID to Remove",
		"type": "string",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"clientContact"
				],
				"operation": [
					"delete"
				]
			}
		}
	},
	{
		"name": "parent_id",
		"displayName": "Parent_id",
		"type": "string",
		"description": "Client main profile ID contact is removed from",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"clientContact"
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
					"clientContact"
				],
				"operation": [
					"getByClient"
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
					"clientContact"
				],
				"operation": [
					"getByClient"
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
					"clientContact"
				],
				"operation": [
					"update"
				]
			}
		}
	},
	{
		"name": "Optional Fields",
		"displayName": "Optional Fields",
		"type": "collection",
		"required": true,
		"default": [],
		"displayOptions": {
			"show": {
				"resource": [
					"clientContact"
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
	}
]