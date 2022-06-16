// This code was generated. Therefore do not edit it directly.

import { INodeProperties } from 'n8n-workflow';

export const accountFields: INodeProperties[] = [
	{
		'displayName': 'Operation',
		'name': 'operation',
		'type': 'options',
		'noDataExpression': true,
		'default': 'getAll',
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
			},
		},
		'options': [
			{
				'name': 'Create',
				'value': 'create',
			},
			{
				'name': 'Delete',
				'value': 'delete',
			},
			{
				'name': 'Get',
				'value': 'get',
			},
			{
				'name': 'Get All',
				'value': 'getAll',
			},
			{
				'name': 'Update',
				'value': 'update',
			},
			{
				'name': 'Add Addon',
				'value': 'addAddon',
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Account ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Account ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'delete',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Account ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'get',
				],
			},
		},
	},
	{
		'name': 'additionalFields',
		'displayName': 'Additional Fields',
		'type': 'collection',
		'required': true,
		'default': [],
		'placeholder': 'Add Field',
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'getAll',
				],
			},
		},
		'options': [
			{
				'name': 'page',
				'displayName': 'Page',
				'type': 'number',
				'description': 'Which page to return',
				'required': false,
				'default': 1,
			},
			{
				'name': 'list',
				'displayName': 'Status to List',
				'type': 'options',
				'required': false,
				'default': '',
				'options': [
					{
						'name': 'All',
						'value': 'all',
					},
					{
						'name': 'Active',
						'value': 'all_active',
					},
					{
						'name': 'Pending',
						'value': 'all_pending',
					},
					{
						'name': 'Suspended',
						'value': 'all_suspended',
					},
					{
						'name': 'Terminated',
						'value': 'all_terminated',
					},
					{
						'name': 'Fraud',
						'value': 'all_fraud',
					},
					{
						'name': 'Cancelled',
						'value': 'all_cancelled',
					},
				],
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Account ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'update',
				],
			},
		},
	},
	{
		'name': 'additionalFields',
		'displayName': 'Additional Fields',
		'type': 'collection',
		'required': true,
		'default': [],
		'placeholder': 'Add Field',
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'update',
				],
			},
		},
		'options': [
			{
				'name': 'product_id',
				'displayName': 'Product ID',
				'type': 'number',
				'required': false,
				'default': 0,
			},
			{
				'name': 'date_created',
				'displayName': 'Creation Date',
				'type': 'dateTime',
				'description': 'Sets account creation date',
				'required': false,
				'default': '',
			},
			{
				'name': 'domain',
				'displayName': 'Domain/Hostname',
				'type': 'string',
				'description': 'Sets account domain/hostname',
				'required': false,
				'default': '',
			},
			{
				'name': 'server_id',
				'displayName': 'Server ID',
				'type': 'number',
				'description': 'Sets server (ID) from which this account will be provisoned',
				'required': false,
				'default': 0,
			},
			{
				'name': 'payment_module',
				'displayName': 'Payment Module ID',
				'type': 'number',
				'description': 'Sets payment module (ID) for this account',
				'required': false,
				'default': 0,
			},
			{
				'name': 'firstpayment',
				'displayName': 'First Payment',
				'type': 'number',
				'description': 'Sets first payment amount',
				'required': false,
				'default': 0,
			},
			{
				'name': 'total',
				'displayName': 'Recurring Amount',
				'type': 'number',
				'description': 'Sets recurring amount',
				'required': false,
				'default': 0,
			},
			{
				'name': 'next_due',
				'displayName': 'Next Due',
				'type': 'dateTime',
				'description': 'Sets next due date',
				'required': false,
				'default': '',
			},
			{
				'name': 'status',
				'displayName': 'Status',
				'type': 'options',
				'description': 'Sets account status',
				'required': false,
				'default': '',
				'options': [
					{
						'name': 'Active',
						'value': 'Active',
					},
					{
						'name': 'Suspended',
						'value': 'Suspended',
					},
					{
						'name': 'Terminated',
						'value': 'Terminated',
					},
				],
			},
			{
				'name': 'username',
				'displayName': 'Username',
				'type': 'string',
				'description': 'Sets username for this account',
				'required': false,
				'default': '',
			},
			{
				'name': 'password',
				'displayName': 'Password',
				'type': 'string',
				'description': 'Sets password for this account',
				'required': false,
				'default': '',
			},
			{
				'name': 'rootpassword',
				'displayName': 'Root Password',
				'type': 'string',
				'description': 'Sets root password',
				'required': false,
				'default': '',
			},
			{
				'name': 'notes',
				'displayName': 'Notes',
				'type': 'string',
				'required': false,
				'default': '',
			},
		],
	},
	{
		'name': 'account_id',
		'displayName': 'Account ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'addAddon',
				],
			},
		},
	},
	{
		'name': 'addon_id',
		'displayName': 'Addon ID',
		'type': 'number',
		'description': 'ID of addon from hb_addons table to add',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'addAddon',
				],
			},
		},
	},
	{
		'name': 'additionalFields',
		'displayName': 'Additional Fields',
		'type': 'collection',
		'required': true,
		'default': [],
		'placeholder': 'Add Field',
		'displayOptions': {
			'show': {
				'resource': [
					'account',
				],
				'operation': [
					'addAddon',
				],
			},
		},
		'options': [
			{
				'name': 'invoice',
				'displayName': 'Invoice',
				'type': 'boolean',
				'description': 'Set to true if invoice for adding this addon should be generated',
				'required': false,
				'default': false,
			},
			{
				'name': 'cycle',
				'displayName': 'Billing cycle',
				'type': 'options',
				'required': false,
				'default': '',
				'options': [
					{
						'name': 'Monthly',
						'value': 'm',
					},
					{
						'name': 'Quarterly',
						'value': 'q',
					},
					{
						'name': 'Semi Annualy (2 in a year)',
						'value': 's',
					},
					{
						'name': 'Annually',
						'value': 'a',
					},
					{
						'name': 'Bi-Monthly',
						'value': 'b',
					},
					{
						'name': 't',
						'value': 't',
					},
					{
						'name': 'Daily',
						'value': 'd',
					},
					{
						'name': 'Weekly',
						'value': 'w',
					},
					{
						'name': 'Hourly',
						'value': 'h',
					},
					{
						'name': 'Free',
						'value': 'Free',
					},
					{
						'name': 'Once',
						'value': 'Once',
					},
				],
			},
			{
				'name': 'payment_module',
				'displayName': 'Payment Gateway ID',
				'type': 'number',
				'description': 'If you choose to generate invoice, you can provide ID of payment gateway to use',
				'required': false,
				'default': 0,
			},
		],
	},
];
