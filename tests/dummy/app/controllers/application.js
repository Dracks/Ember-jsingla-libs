import Ember from 'ember';
import FeedbackMessage from 'ember-binding-libs/utils/feedback-message'

export default Ember.Controller.extend({
	date: Date(),
	selectList: [Ember.Object.create({
		id:1,
		name: "Info",
		type: ""
	}), Ember.Object.create({
		id:2,
		name: "Error",
		type: "error"
	}), Ember.Object.create({
		id:1,
		name: "Warning",
		type: "warning"
	})],
	selectValue: null,
	message: Ember.computed('selectValue', {
		get(){
			var v = this.get('selectValue');
			if (v) {
				return Ember.Object.create({
					text: v.get('name'),
					timer: 30,
					type: v.get('type')
				});
			} else {
				return Ember.Object.create({
					text: "No selected value",
					timer: null,
					type: "other"
				});
			}
		}
	}),
	message2: Ember.computed({
		get(){
			return FeedbackMessage.error("Hi world!", 150);
		}
	})
});
