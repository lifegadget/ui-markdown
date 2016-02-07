import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/markdown-convert';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  classNames: ['ui-markdown'],
  style: 'no',
  init: function(...args) {
    this._super(args);

    this.converter = new showdown.Converter({ // jshint ignore:line
      extensions: (this.get("extensions") || [])
    });

    run.schedule('afterRender', () => {
      let blockContent = $(`#${this.elementId} .markdown-content`).text();
      if (blockContent.length > 0) {
        let textLines = blockContent.split(/[\r\n]/);
        let filterEmptyStarters = a();
        for(let i=0; textLines[i].trim() === ''; i++) {
          filterEmptyStarters.pushObject(i);
        }
        textLines = textLines.filter((f,i)=>!filterEmptyStarters.contains(i));
        if (textLines.length > 0) {
          textLines[0] = textLines[0].replace(/\s{4}(.*)/, "$1"); // WHY IS THIS NEEDED ?!?!?!
          const baseIndentation = textLines[0].match(/^([\s]*)/)[1];
          const re = new RegExp(baseIndentation + '(.*)');
          this.set('content', textLines.map(l=>l.replace(re, "$1")).join('\n'));
        }
      }
    });
  },

  html: computed('content', function() {
    const showdownOptions = this.getProperties(
      'omitExtraWLInCodeBlocks',
      'noHeaderId',
      'prefixHeaderId',
      'parseImgDimensions',
      'headerLevelStart',
      'simplifiedAutoLink',
      'literalMidWordUnderscores',
      'strikethrough',
      'tables',
      'tablesHeaderId',
      'ghCodeBlocks',
      'tasklists',
      'smoothLivePreview'
    );

    for (let option in showdownOptions) {
      if (showdownOptions.hasOwnProperty(option)) {
        this.converter.setOption(option, showdownOptions[option]);
      }
    }
    const source =  this.get('content') || '';
    return new Ember.Handlebars.SafeString(this.converter.makeHtml(source));
  }),

  tables: true,
  taskslists: true,
  ghCodeBlocks: true,
  strikethrough: true,
  omitExtraWLInCodeBlocks: true
});
