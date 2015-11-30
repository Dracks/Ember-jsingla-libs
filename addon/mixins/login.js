import Ember from 'ember';

export default Ember.Mixin.create({
	session: Ember.inject.service(),

	titleText: "Login",
	userText: "Username",
	passwordText: "Password",
	loginText: "Login",

	username: "",
	password: "",

	oauth: 'js-oauth',

	message: {
		show:false,
		message:""
	},

	authenticate(){
		var username=this.get('username');
		var password=this.get('password');
		if (username.length>0 && password.length>0) {
			var authenticator=this.get('oauth');
			return this.get('session').authenticate('authenticator:'+authenticator, username, password);
		} else {
			return "login.errors.no-data";
		}
	}
});
