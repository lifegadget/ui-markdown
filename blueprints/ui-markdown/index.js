/*jshint node:true*/
module.exports = {
	description: 'Installs Showdown',

	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'showdown', target: '^1.3.0' }
    ]);
	}
};
