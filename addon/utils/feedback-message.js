export default {
	clean(message, timer){
		return Ember.Object.create({
			type:"info",
			text:message,
			timer: timer,
			show: true
		});
	},
	error(message, timer){
		var err=this.clean(message, timer);
		err.set('type', 'error');
		return err
	},
	warning(message, timer){
		var err=this.clean(message, timer);
		err.set('type', 'warning');
		return err;
	}
}
