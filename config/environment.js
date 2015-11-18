/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
	var ENV = {
		APP: {
			API_HOSTNAME: 'http://localhost',
			API_NAMESPACE: 'api',
			API_ADD_TRAILING_SLASHES: true
		}, OAUTH:{
			API_CLIENT_ID: '',
			API_CLIENT_SECRET: ''
		}
	};
	return ENV;
};
