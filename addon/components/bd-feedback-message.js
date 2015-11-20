import Ember from 'ember';
import layout from '../templates/components/bd-feedback-message';

export default Ember.Component.extend({
	classNames: ['alert', 'alert-dismissible','message-box'],
	classNameBindings:["bootstrapType", "isShowed:in"],
	layout: layout,
	isShowed:true,
	hasCloseButton:true,
	timer:null,
	timerId:null,
	type:"info",
	bootstrapType:Ember.computed('type', function (){
		var tag="success";
		var type=this.get('type');
		if (type){
			type=type.toLowerCase();
		} else {
			type="info"
		}
		if (type=="error"){
			tag="danger"
		} else if (type=="warning"){
			tag="warning"
		}
		return "alert-"+tag;
	}),
	showObserver: Ember.computed('isShowed',function (){
		if (this.get('isShowed')==true){
			var _this=this;
			var timer=this.get('timer');
			if (parseInt(timer)>0){
				var tId=Ember.run.later(function (){
					_this.hide();
					_this.set('timerId', null);
				}, parseInt(timer)*1000);
				this.set('timerId', tId);
			} else {
				this.set('timerId', null);
			}
		} else {
			var timerId=this.get('timerId');
			if (timerId!==null){
				Ember.run.cancel(timerId);
			}
		}
	}),
	hide: function (){
		this.set('isShowed', false);
	},
	actions: {
		hide: function (){
			this.hide();
		}
	}
});
