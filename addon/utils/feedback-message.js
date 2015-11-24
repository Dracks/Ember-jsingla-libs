import Ember from 'ember';

export default {
	empty(){
		return Ember.Object.create({
			type:"",
			text: "",
			timer: null,
			show: false
		});
	},
	base(message, timer){
		return Ember.Object.create({
			type:"info",
			text:message,
			timer: timer,
			show: true
		});
	},
	error(message, timer){
		var err=this.base(message, timer);
		err.set('type', 'error');
		return err;
	},
	warning(message, timer){
		var err=this.base(message, timer);
		err.set('type', 'warning');
		return err;
	}
}
