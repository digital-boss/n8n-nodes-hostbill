import { INodeProperties } from "n8n-workflow";

export const resources: INodeProperties = {
	"displayName": "Resource",
	"name": "resource",
	"type": "options",
	"noDataExpression": true,
	"options": [
		{
			"name": "Client",
			"value": "client"
		},
		{
			"name": "Client Contact",
			"value": "clientContact"
		},
		{
			"name": "Invoice",
			"value": "invoice"
		},
		{
			"name": "Order",
			"value": "order"
		},
		{
			"name": "Account",
			"value": "account"
		},
		{
			"name": "Service",
			"value": "service"
		},
		{
			"name": "Domain",
			"value": "domain"
		}
	],
	"default": "client"
}