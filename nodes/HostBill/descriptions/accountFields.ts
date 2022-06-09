import { INodeProperties } from "n8n-workflow";

export const accountFields: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"default": "getAll",
		"displayOptions": {
			"show": {
				"resource": [
					"account"
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
				"name": "Update",
				"value": "update"
			},
			{
				"name": "Add Addon",
				"value": "addAddon"
			}
		]
	},
	{
		"name": "id",
		"displayName": "Id",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"create"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Id",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"delete"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Id",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
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
					"account"
				],
				"operation": [
					"getAll"
				]
			}
		}
	},
	{
		"name": "list",
		"displayName": "Status to List",
		"type": "options",
		"required": true,
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"getAll"
				]
			}
		},
		"options": [
			{
				"name": "All",
				"value": "all"
			},
			{
				"name": "Active",
				"value": "all_active"
			},
			{
				"name": "Pending",
				"value": "all_pending"
			},
			{
				"name": "Suspended",
				"value": "all_suspended"
			},
			{
				"name": "Terminated",
				"value": "all_terminated"
			},
			{
				"name": "Fraud",
				"value": "all_fraud"
			},
			{
				"name": "Cancelled",
				"value": "all_cancelled"
			}
		]
	},
	{
		"name": "id",
		"displayName": "Id",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"update"
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
					"account"
				],
				"operation": [
					"update"
				]
			}
		},
		"options": [
			{
				"name": "product_id",
				"displayName": "Product_id",
				"type": "number",
				"required": false,
				"default": 0
			},
			{
				"name": "date_created",
				"displayName": "Date_created",
				"type": "dateTime",
				"description": "Sets account creation date",
				"required": false,
				"default": ""
			},
			{
				"name": "domain",
				"displayName": "Domain",
				"type": "string",
				"description": "Sets account domain/hostname",
				"required": false,
				"default": ""
			},
			{
				"name": "server_id",
				"displayName": "Server_id",
				"type": "number",
				"description": "Sets server (ID) from which this account will be provisoned",
				"required": false,
				"default": 0
			},
			{
				"name": "payment_module",
				"displayName": "Payment_module",
				"type": "number",
				"description": "Sets payment module (ID) for this account",
				"required": false,
				"default": 0
			},
			{
				"name": "firstpayment",
				"displayName": "Firstpayment",
				"type": "number",
				"description": "Sets first payment amount",
				"required": false,
				"default": 0
			},
			{
				"name": "total",
				"displayName": "Total",
				"type": "number",
				"description": "Sets recurring amount",
				"required": false,
				"default": 0
			},
			{
				"name": "next_due",
				"displayName": "Next_due",
				"type": "dateTime",
				"description": "Sets next due date",
				"required": false,
				"default": ""
			},
			{
				"name": "status",
				"displayName": "Status",
				"type": "options",
				"description": "Sets account status",
				"required": false,
				"default": "",
				"options": [
					{
						"name": "Active",
						"value": "Active"
					},
					{
						"name": "Suspended",
						"value": "Suspended"
					},
					{
						"name": "Terminated",
						"value": "Terminated"
					}
				]
			},
			{
				"name": "username",
				"displayName": "Username",
				"type": "string",
				"description": "Sets username for this account",
				"required": false,
				"default": ""
			},
			{
				"name": "password",
				"displayName": "Password",
				"type": "string",
				"description": "Sets password for this account",
				"required": false,
				"default": ""
			},
			{
				"name": "rootpassword",
				"displayName": "Rootpassword",
				"type": "string",
				"description": "Sets root password",
				"required": false,
				"default": ""
			},
			{
				"name": "notes",
				"displayName": "Notes",
				"type": "string",
				"required": false,
				"default": ""
			}
		]
	},
	{
		"name": "account_id",
		"displayName": "Account ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"addAddon"
				]
			}
		}
	},
	{
		"name": "addon_id",
		"displayName": "Addon ID",
		"type": "number",
		"description": "ID of addon from hb_addons table to add",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				],
				"operation": [
					"addAddon"
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
					"account"
				],
				"operation": [
					"addAddon"
				]
			}
		},
		"options": [
			{
				"name": "invoice",
				"displayName": "Invoice",
				"type": "boolean",
				"description": "Set to true if invoice for adding this addon should be generated",
				"required": false,
				"default": false
			},
			{
				"name": "cycle",
				"displayName": "Cycle",
				"type": "options",
				"description": "Allowed values: 'm','q','s','a','b','t','d','w','h' or 'Free' or 'Once' where m-monthly, q-quarterly etc.",
				"required": false,
				"default": "",
				"options": [
					{
						"name": "Monthly",
						"value": "m"
					},
					{
						"name": "Quarterly",
						"value": "q"
					},
					{
						"name": "s",
						"value": "s"
					},
					{
						"name": "a",
						"value": "a"
					},
					{
						"name": "b",
						"value": "b"
					},
					{
						"name": "t",
						"value": "t"
					},
					{
						"name": "d - Dayly?",
						"value": "d"
					},
					{
						"name": "w - Weekly?",
						"value": "w"
					},
					{
						"name": "h - Hourly?",
						"value": "h"
					},
					{
						"name": "Free",
						"value": "Free"
					},
					{
						"name": "Once",
						"value": "Once"
					}
				]
			},
			{
				"name": "payment_module",
				"displayName": "Payment Gateway ID",
				"type": "number",
				"description": "If you choose to generate invoice, you can provide ID of payment gateway to use",
				"required": false,
				"default": 0
			}
		]
	}
]