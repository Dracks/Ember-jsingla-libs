import Ember from "ember";
import layout from '../templates/components/js-select';


export default Ember.Component.extend({
	tagName:'select',
	layout:layout,
	content: null,
	selectedValue: null,
	prompt: null,
	label:'name',

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

		var call = function () {
			var label=this.get('label');
			return this.get('content').map(function (e) {
				console.log(e.get(label));
				return Ember.Object.create({
					id: e.get('id'),
					name: e.get(label)
				});
			});
		}.bind(this);
		this.renderedList = Ember.computed('content.@each.'+this.get('label'), call);
		this.labelObserver = Ember.observer('label', function (){
			this.renderedList = Ember.computed('content.@each.'+this.get('label'), call);
		}.bind(this))
	}),


	change(args){
		const id=args.currentTarget.value;
		const selectedValue = this.get('content').find( function (e){
			//console.log(e.get('id'));
			//console.log(id);
			return e.get('id')===id;
		});

		this.set('selectedValue', selectedValue);
		this.sendAction('action', selectedValue);
		//console.log(selectedValue);
	}

});
