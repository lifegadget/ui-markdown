import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/markdown-file';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  classNames: ['markdown-file'],
  style='default',

  content: computed('url', {
    set(_, value) {
      return value;
    },
    get() {
      let url = this.get('url');
      $.get(url, data => {
          console.log('received markdown content: data', data);
          this.set('content', data);
        });

      return null;
    }
  }),

});
