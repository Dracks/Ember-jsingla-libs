// addon/authenticators/bd-oauth.js
import Ember from 'ember'
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from "../config/environment"

export default OAuth2PasswordGrant.extend({
	clientId: [ENV.API_CLIENT_ID, ENV.API_CLIENT_SECRET],

	makeRequest(url, data) {
		var options = {
			url: url,
			data: data,
			type: 'POST',
			dataType: 'json',
			contentType: 'application/x-www-form-urlencoded'
		};
		var clientId = this.get('clientId');

		if (!Ember.isEmpty(clientId)) {
			var base64ClientId = window.btoa(clientId.join(':'));
			Ember.merge(options, {
				headers: {
					Authorization: 'Basic ' + base64ClientId
				}
			});
		}

		return Ember.$.ajax(options);
	}

});
