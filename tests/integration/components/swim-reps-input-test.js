import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('swim-reps-input', 'Integration | Component | swim reps input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{swim-reps-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#swim-reps-input}}
      template block text
    {{/swim-reps-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
