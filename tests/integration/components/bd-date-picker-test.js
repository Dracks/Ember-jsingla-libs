import { moduleForComponent, test } from 'ember-qunit';
//import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bd-date-picker', 'Integration | Component | bd date picker', {
  integration: false
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{bd-date-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#bd-date-picker}}
      template block text
    {{/bd-date-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

