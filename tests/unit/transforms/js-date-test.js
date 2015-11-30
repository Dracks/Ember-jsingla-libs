import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:js-date', 'Unit | Transform | js date', {
	// Specify the other units that are required for this test.
	// needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function (assert) {
	let transform = this.subject();
	var m = moment("1986-07-21", "YYYY-MM-DD");
	assert.equal(transform.deserialize("1986-07-21").toString(), m.toDate().toString());
	assert.equal(transform.serialize(m.toDate()), "1986-07-21");
	assert.equal(transform.serialize(null), null);
	assert.equal(transform.deserialize(null), null);
});
