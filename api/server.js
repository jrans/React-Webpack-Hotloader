'use strict';

var Hapi   = require('hapi');
var server = new Hapi.Server();

server.connection({
	port: Number(process.env.PORT) || 9009
});

server.route(require('./routes.js'));

module.exports = server;
