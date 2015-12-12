import Ember from 'ember';
import required from '../../../utils/required';
import { module, test } from 'qunit';

module('Unit | Utility | required object');

// Replace this with your real tests.
test('Check errors', function (assert) {
	var object=Ember.Object.create({
		"exist": moment("1986-07-21").toDate(),
		"null": moment("1900-01-01").toDate()
	});

	var errors = required.date(object, ["exist"]);
	assert.equal(errors.length,0, "The field was ok");

	errors=required.date(object, ["nonexist"]);
	assert.equal(errors.length,1, "It doesn't exists");

	errors=required.date(object, ["exist", "null", "nonexist"]);
	assert.equal(errors.length,2, "Chech the null value data");
});
