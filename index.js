'use strict';

var server = require('./api/server');

server.start(function(){
	
    console.log('Server running on port:', server.info.port);
});