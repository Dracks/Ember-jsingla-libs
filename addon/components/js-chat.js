import Ember from 'ember';
import layout from '../templates/components/js-chat';

export default Ember.Component.extend({
	layout: layout,

	sendText: "Send",
	listMessages: [],
	newMessageText:'',
	sortedListMessages: Ember.computed('listMessages.[].ts', function(){
		var list=this.get('listMessages');
		if (list && list.sortBy) {
			return this.get('listMessages').sortBy('ts');
		}
		return list;
	}),
	actions: {
		send(){
			var message=this.get('newMessageText');
			this.sendAction('sendMessage', message);
			this.set('newMessageText', '')
		},
		_loadMore(){
			this.sendAction('loadMore');
		}
	}
});
