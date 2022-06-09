import { INodeProperties } from "n8n-workflow";

export const serviceFields: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"default": "getProducts",
		"displayOptions": {
			"show": {
				"resource": [
					"service"
				]
			}
		},
		"options": [
			{
				"name": "Get Product Details",
				"value": "getProductDetails"
			},
			{
				"name": "Get Products",
				"value": "getProducts"
			}
		]
	},
	{
		"name": "id",
		"displayName": "Product ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"service"
				],
				"operation": [
					"getProductDetails"
				]
			}
		}
	},
	{
		"name": "id",
		"displayName": "Orderpage ID",
		"type": "number",
		"required": true,
		"default": 0,
		"displayOptions": {
			"show": {
				"resource": [
					"service"
				],
				"operation": [
					"getProducts"
				]
			}
		}
	}
]