/* jshint node: true */
'use strict';

module.exports = {
  name: 'ui-markdown',
  description: 'convert markdown to a styled HTML document',
	included: function(app,parentAddon) {
		this._super.included(app);
    var target = (parentAddon || app);
    var bower = target.bowerDirectory;
    var options = typeof app.options === 'object' ? app.options : {};
    var addonConfig = options['ui-markdown'] || {};

    target.import('vendor/ui-markdown/ui-markdown.css');
    target.import('vendor/ui-markdown/avenir.css');
    target.import('vendor/ui-markdown/github.css');
    target.import('vendor/ui-markdown/foghorn.css');
    target.import('vendor/ui-markdown/screen.css');
    target.import('vendor/ui-markdown/swiss.css');
    target.import(bower + '/showdown/dist/showdown.js');

  }
};
