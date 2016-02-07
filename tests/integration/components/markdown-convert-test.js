import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('markdown-convert', 'Integration | Component | markdown convert', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{markdown-convert content='#Hello World'}}`);

  assert.equal(this.$('h1').text().trim(), 'Hello World');

  // Template block usage:"
  this.render(hbs`
    {{#markdown-convert}}
      #Hello World
    {{/markdown-convert}}
  `);

  assert.equal(this.$('h1').text().trim(), 'Hello World');
});
