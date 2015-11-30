import DS from 'ember-data';

export default DS.Transform.extend({
	deserialize(serialized) {
		var m=moment(serialized, "YYYY-MM-DD");
		return m.toDate();
	},

	serialize(deserialized) {
		var m=moment(deserialized);
		return m.format("YYYY-MM-DD");
	}
});
