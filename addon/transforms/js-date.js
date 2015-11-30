import DS from 'ember-data';

export default DS.Transform.extend({
	deserialize(serialized) {
		if (serialized) {
			var m = moment(serialized, "YYYY-MM-DD");
			return m.toDate();
		}
		return null;
	},

	serialize(deserialized) {
		if (deserialized) {
			var m = moment(deserialized);
			return m.format("YYYY-MM-DD");
		}
		return null;
	}
});
