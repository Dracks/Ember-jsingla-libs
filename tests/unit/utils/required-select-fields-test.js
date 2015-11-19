import Ember from 'ember';
import requiredSelectFields from '../../../utils/required-select-fields';
import { module, test } from 'qunit';

module('Unit | Utility | required select fields');

// Replace this with your real tests.
test('Check errors', function (assert) {
	var object = Ember.Object.create({
		"exist": Ember.Object.create({'id':'pong'}),
		"isnull": Ember.Object.create({'id': undefined})
	});

	var errors = requiredSelectFields(object, ["exist"]);
	assert.equal(errors.length, 0, "The field was ok");

	errors = requiredSelectFields(object, ["nonexist"]);
	assert.equal(errors.length, 1, "It doesn't exists");

	errors = requiredSelectFields(object, ["exist", "isnull"]);
	assert.equal(errors.length, 1, "Should return error for the undefined");
	assert.equal(errors[0], "isnull", "thats the correct field");
});
