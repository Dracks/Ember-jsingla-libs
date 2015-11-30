import Ember from 'ember';
import LoginMixin from 'ember-jsingla-libs/mixins/login';

export default Ember.Controller.extend(LoginMixin,{
	actions: {
		login(){
			var result=this.authenticate();
		}
	}
});
