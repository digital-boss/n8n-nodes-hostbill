// This code was generated. Therefore do not edit it directly.

import { INodeProperties } from 'n8n-workflow';

export const invoiceFields: INodeProperties[] = [
	{
		'displayName': 'Operation',
		'name': 'operation',
		'type': 'options',
		'noDataExpression': true,
		'default': 'getAll',
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
			},
		},
		'options': [
			{
				'name': 'Create',
				'value': 'create',
			},
			{
				'name': 'Add Item',
				'value': 'addItem',
			},
			{
				'name': 'Add Payment',
				'value': 'addPayment',
			},
			{
				'name': 'Set Status',
				'value': 'setStatus',
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
		],
	},
	{
		'name': 'client_id',
		'displayName': 'Client ID',
		'type': 'number',
		'description': 'Client id to create invoice for',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Invoice ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addItem',
				],
			},
		},
	},
	{
		'name': 'line',
		'displayName': 'Description',
		'type': 'string',
		'description': 'Description of new invoice item',
		'required': true,
		'default': '',
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addItem',
				],
			},
		},
	},
	{
		'name': 'price',
		'displayName': 'Price',
		'type': 'string',
		'required': true,
		'default': '',
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addItem',
				],
			},
		},
	},
	{
		'name': 'qty',
		'displayName': 'Item QTY',
		'type': 'number',
		'required': true,
		'default': 1,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addItem',
				],
			},
		},
	},
	{
		'name': 'tax',
		'displayName': 'Item is Taxed',
		'type': 'boolean',
		'required': true,
		'default': false,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addItem',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Invoice ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
	},
	{
		'name': 'amount',
		'displayName': 'Transaction amount',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
	},
	{
		'name': 'paymentmodule',
		'displayName': 'Payment Gateway ID',
		'type': 'number',
		'description': 'ID of related payment gateway',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
	},
	{
		'name': 'fee',
		'displayName': 'Fee',
		'type': 'number',
		'description': 'Fees applied to payment (0 for no fees)',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
	},
	{
		'name': 'date',
		'displayName': 'Transaction Date',
		'type': 'dateTime',
		'required': true,
		'default': '',
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
	},
	{
		'name': 'Additional Fields',
		'displayName': 'Additional Fields',
		'type': 'collection',
		'required': true,
		'default': [],
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'addPayment',
				],
			},
		},
		'options': [
			{
				'name': 'transnumber',
				'displayName': 'Transaction Number',
				'type': 'number',
				'required': false,
				'default': 0,
			},
			{
				'name': 'currency_id',
				'displayName': 'Currency ID',
				'type': 'number',
				'required': false,
				'default': 0,
			},
			{
				'name': 'rate',
				'displayName': 'Currency Rate',
				'type': 'number',
				'required': false,
				'default': 0,
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Invoice ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'setStatus',
				],
			},
		},
	},
	{
		'name': 'status',
		'displayName': 'Status',
		'type': 'options',
		'required': true,
		'default': '',
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'setStatus',
				],
			},
		},
		'options': [
			{
				'name': 'Paid',
				'value': 'Paid',
			},
			{
				'name': 'Unpaid',
				'value': 'Unpaid',
			},
			{
				'name': 'Cancelled',
				'value': 'Cancelled',
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Invoice ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
				],
				'operation': [
					'delete',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Invoice ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'invoice',
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
					'invoice',
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
				'displayName': 'Status of invoices to list',
				'type': 'options',
				'required': false,
				'default': 'all',
				'options': [
					{
						'name': 'All',
						'value': 'all',
					},
					{
						'name': 'Paid',
						'value': 'paid',
					},
					{
						'name': 'Unpaid',
						'value': 'unpaid',
					},
					{
						'name': 'Cancelled',
						'value': 'cancelled',
					},
				],
			},
		],
	},
];
