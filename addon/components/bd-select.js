import Ember from "ember";
import layout from '../templates/components/bd-select';


export default Ember.Component.extend({
	tagName:'select',
	layout:layout,
	content: null,
	selectedValue: null,
	prompt: null,

	hasPrompt: Ember.computed('prompt', {
		get(){
			var prompt = this.get('prompt');
			return prompt !== null && prompt !== undefined;
		}
	}),

	initAttributes: Ember.on('didInitAttrs', function () {
		//this._super(...arguments);
		var content = this.get('content');

		if (!content) {
			this.set('content', []);
		}
	}),

	change(args){
		const id=args.currentTarget.value;
		const selectedValue = this.get('content').find( function (e){
			return e.get('id')===id;
		});

		this.set('selectedValue', selectedValue);
		this.sendAction('action', selectedValue);
	}

});
