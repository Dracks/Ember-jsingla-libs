import Ember from 'ember';
function createMessage(user, text, hour, minute){
	var m=moment();
	m.hour(hour);
	m.minute(minute);
	return Ember.Object.create({
		user: Ember.Object.create({'name':user}),
		text: text,
		ts: m.toDate()
	});
}

export default Ember.Controller.extend({
	messages: Ember.computed(function (){
		return [
			createMessage('alice', "Hi", 12, 11),
			createMessage('bob', "Hi", 12, 12),
			createMessage('alice', "How are you?", 12, 14),
			createMessage('clark', "Hi, and you?", 13, 50),
			createMessage('bob', "Go to HELL!", 13, 40)
		];}),
	actions: {
		newMessage(text){
			var l=this.get('messages');
			l.push(createMessage('myself', text, 14, 0));
			//this.set('listMessages', l);
		},
		loadMore(){
			var l=this.get('messages');
			l.push(createMessage('system', 'load more chats', 14, 0));
		}
	}
});
