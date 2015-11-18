import Ember from 'ember';
import LoginMixin from 'ember-binding-libs/mixins/login';

export default Ember.Controller.extend(LoginMixin,{
	actions: {
		login(){
			var result=this.authenticate();
		}
	}
});
