// This code was generated. Therefore do not edit it directly.

import { INodeProperties } from 'n8n-workflow';

export const domainFields: INodeProperties[] = [
	{
		'displayName': 'Operation',
		'name': 'operation',
		'type': 'options',
		'noDataExpression': true,
		'default': 'getAll',
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
			},
		},
		'options': [
			{
				'name': 'Register',
				'value': 'register',
			},
			{
				'name': 'Transfer',
				'value': 'transfer',
			},
			{
				'name': 'Renew',
				'value': 'renew',
			},
			{
				'name': 'Delete',
				'value': 'delete',
			},
			{
				'name': 'Epp',
				'value': 'epp',
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
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
				'operation': [
					'register',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
				'operation': [
					'transfer',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
				'operation': [
					'renew',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
				'operation': [
					'delete',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
				],
				'operation': [
					'epp',
				],
			},
		},
	},
	{
		'name': 'id',
		'displayName': 'Domain ID',
		'type': 'number',
		'required': true,
		'default': 0,
		'displayOptions': {
			'show': {
				'resource': [
					'domain',
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
					'domain',
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
						'value': 'active',
					},
					{
						'name': 'Expired',
						'value': 'expired',
					},
					{
						'name': 'Pending',
						'value': 'pending',
					},
					{
						'name': 'Pending Transfer',
						'value': 'pending_transfer',
					},
					{
						'name': 'Pending Registration',
						'value': 'pending_registration',
					},
				],
			},
		],
	},
];
