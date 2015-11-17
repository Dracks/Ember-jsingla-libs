import Ember from 'ember';

export default Ember.Mixin.create({
	session: Ember.inject.service(),

	titleText: "Login",
	userText: "Username",
	passwordText: "Password",
	loginText: "Login",

	username: "",
	password: "",

	message: {
		show:false,
		message:""
	},

	authenticate(){
		var username=this.get('username');
		var password=this.get('password');
		if (username.length>0 && password.length>0) {
			return this.get('session').authenticate('authenticator:bd-oauth', username, password)
		} else {
			return "login.errors.no-data"
		}
	}
});
