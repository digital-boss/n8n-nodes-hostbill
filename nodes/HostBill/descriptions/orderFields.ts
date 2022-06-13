import { INodeProperties } from 'n8n-workflow';

export const orderFields: INodeProperties[] = [
	{
		'displayName': 'Operation',
		'name': 'operation',
		'type': 'options',
		'noDataExpression': true,
		'default': 'getAll',
		'displayOptions': {
			'show': {
				'resource': [
					'order',
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
				'name': 'Set Status',
				'value': 'setStatus',
			},
			{
				'name': 'Set Active',
				'value': 'setActive',
			},
		],
	},
	{
		'name': 'client_id',
		'displayName': 'Client ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'confirm',
		'displayName': 'Notify Client',
		'type': 'boolean',
		'description': 'Enable if you wish to notify client about this order',
		'required': true,
		'default': false,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'invoice_generate',
		'displayName': 'Generate Invoice',
		'type': 'boolean',
		'description': 'Enable if you wish to generate invoice for this order',
		'required': true,
		'default': false,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'invoice_info',
		'displayName': 'Send Invoice',
		'type': 'boolean',
		'description': 'Enable if you wish to send invoice generated for this order',
		'required': true,
		'default': false,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'module',
		'displayName': 'Payment module ID',
		'type': 'number',
		'description': 'Payment module ID invoice should be generated with',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
	},
	{
		'name': 'serviceFields',
		'displayName': 'Ordering product/service',
		'type': 'collection',
		'required': true,
		'default': [],
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
		'options': [
			{
				'name': 'product',
				'displayName': 'Service ID',
				'type': 'number',
				'description': 'Service ID to purchase',
				'required': false,
				'default': 0,
			},
			{
				'name': 'domain_name',
				'displayName': 'Domain Name',
				'type': 'string',
				'required': false,
				'default': '',
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
				'name': 'coupon',
				'displayName': 'Promocode',
				'type': 'string',
				'description': 'Valid promotion code',
				'required': false,
				'default': '',
			},
		],
	},
	{
		'name': 'domainFields',
		'displayName': 'Ordering domain action',
		'type': 'collection',
		'description': 'Ordering domain registration/transfer',
		'required': true,
		'default': [],
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'create',
				],
			},
		},
		'options': [
			{
				'name': 'domain_action',
				'displayName': 'Type of Action',
				'type': 'options',
				'required': false,
				'default': '',
				'options': [
					{
						'name': 'Register',
						'value': 'register',
					},
					{
						'name': 'Transfer',
						'value': 'transfer',
					},
				],
			},
			{
				'name': 'domain_sld',
				'displayName': 'Domain Name',
				'type': 'string',
				'required': false,
				'default': '',
			},
			{
				'name': 'domain_period',
				'displayName': 'Number of Years',
				'type': 'number',
				'required': false,
				'default': 0,
			},
			{
				'name': 'domain_tld',
				'displayName': 'Top-level Domain',
				'type': 'string',
				'description': 'Domain tld, e.g.: .com, .org',
				'required': false,
				'default': '',
			},
			{
				'name': 'product',
				'displayName': 'Domain product ID',
				'type': 'number',
				'description': 'Domain product ID - id of product from Domains order page type. Note: domain_tld is the prefered value and will be used if specified.',
				'required': false,
				'default': 0,
			},
			{
				'name': 'domain_dns',
				'displayName': 'Enable DNS Management',
				'type': 'boolean',
				'description': 'Enable if you wish to enable DNS Management',
				'required': false,
				'default': false,
			},
			{
				'name': 'domain_email',
				'displayName': 'Email Forwarding',
				'type': 'boolean',
				'description': 'Enable if you wish to enable Email Forwarding',
				'required': false,
				'default': false,
			},
			{
				'name': 'domain_idp',
				'displayName': 'ID Protection',
				'type': 'boolean',
				'description': 'Enable if you wish to enable ID Protection',
				'required': false,
				'default': false,
			},
			{
				'name': 'coupon',
				'displayName': 'Promocode',
				'type': 'string',
				'description': 'Valid promotion code',
				'required': false,
				'default': '',
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Order ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'delete',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Order ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'get',
				],
			},
		},
	},
	{
		'name': 'page',
		'displayName': 'Page',
		'type': 'number',
		'description': 'Which page to return',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'getAll',
				],
			},
		},
	},
	{
		'name': 'list',
		'displayName': 'Status or Orders to List',
		'type': 'options',
		'required': true,
		'default': '',
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'getAll',
				],
			},
		},
		'options': [
			{
				'name': 'All',
				'value': 'all',
			},
			{
				'name': 'Active',
				'value': 'active',
			},
			{
				'name': 'Pending',
				'value': 'pending',
			},
			{
				'name': 'Fraud',
				'value': 'fraud',
			},
			{
				'name': 'Cancelled',
				'value': 'cancelled',
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Order ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
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
					'order',
				],
				'operation': [
					'setStatus',
				],
			},
		},
		'options': [
			{
				'name': 'Active',
				'value': 'Active',
			},
			{
				'name': 'Pending',
				'value': 'Pending',
			},
			{
				'name': 'Cancelled',
				'value': 'Cancelled',
			},
			{
				'name': 'Fraud',
				'value': 'Fraud',
			},
		],
	},
	{
		'name': 'id',
		'displayName': 'Order ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'order',
				],
				'operation': [
					'setActive',
				],
			},
		},
	},
];
