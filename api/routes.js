'use strict';

// var handlers = require('./handlers');

module.exports = [
	{
		method: 'GET',
		path: '/{filepath*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	},
	{
		method: 'GET',
		path: '/assets/{filepath*}',
		handler: {
			directory: {
				path: 'assets'
			}
		}
	}
];
