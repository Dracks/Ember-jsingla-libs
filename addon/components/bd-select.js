import Ember from "ember";

export default Ember.Component.extend({
	tagName:'select',
	content: null,
	selectedValue: null,
	prompt: null,

	hasPrompt: function (){
		var prompt=this.get('prompt');
		return prompt!==null && prompt!==undefined;
	}.property("prompt"),

	didInitAttrs(attrs) {
		this._super(...arguments);
		var content = this.get('content');

		if (!content) {
			this.set('content', []);
		}
	},

	change(args) {
		const id=args.currentTarget.value;
		const selectedValue = this.get('content').find( function (e){
			return e.get('id')==id;
		});

		this.set('selectedValue', selectedValue);
		this.sendAction('action', selectedValue);
	}

});
