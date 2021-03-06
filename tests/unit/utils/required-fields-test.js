import Ember from 'ember';
import required from '../../../utils/required';
import { module, test } from 'qunit';

module('Unit | Utility | required fields');

// Replace this with your real tests.
test('Check errors', function (assert) {
	var object=Ember.Object.create({
		"exist": "ok"
	});

	var errors = required.input(object, ["exist"]);
	assert.equal(errors.length,0, "The field was ok");

	errors=required.input(object, ["nonexist"]);
	assert.equal(errors.length,1, "It doesn't exists");

	errors=required.input(object, ["exist", "nonexist"], 3);
	assert.equal(errors.length,2, "Should have a minimum length check");
});
