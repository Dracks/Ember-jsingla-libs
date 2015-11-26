import { moduleForComponent, test } from 'ember-qunit';
//import moment from 'moment';

moduleForComponent('js-date-picker', 'Unit | Component | bd date picker');

test('Formatting elements', function (assert) {
	var component = this.subject();
	Ember.run(function () {
		component.set('value', moment("21/07/1986", "DD-MM-YYYY").toDate());
		assert.equal(component.get('_day'), 21);
		assert.equal(component.get('_year'), 1986);
		assert.equal(component.get('_month'), 7-1);
	});
});

test('Parse format', function (assert) {
	var component = this.subject();
	Ember.run(function () {
		component.set('format', '');
		assert.deepEqual(component.get('parsedFormat'), [{}]);

		component.set('format', 'dd');
		assert.deepEqual(component.get('parsedFormat'), [{element: 'd', size: 2}]);

		component.set('format', 'dd/mm/yyyy');
		assert.deepEqual(component.get('parsedFormat'), [
			{element: 'd', separator: '/', size: 2},
			{element: 'm', separator: '/', size: 2},
			{element: 'y', size: 4}
		]);
	})
});

test('Generate list', function (assert){
	var component= this.subject();
	var ret=component.generateList(0,10, 3);
	assert.equal(ret.length, 11);
	assert.equal(ret[0].name, "000");
	assert.equal(ret[3].name, "003");
	assert.equal(ret[10].name, "010");
});

test('Selected list', function (assert){
	assert.ok(true);
});
