/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const fastbootTransform = require('fastboot-transform');

module.exports = function (defaults) {
	let app = new EmberAddon(defaults, {
		// Add options here
		nodeAssets: {
			'popper.js': {
				srcDir: 'dist/umd',
				import: {
					include: ['popper.js'],
					processTree(input) {
						return fastbootTransform(input);
					}
				},
				public: ['popper.js.map']
			}
		}
	});

	/*
	  This build file specifies the options for the dummy test app of this
	  addon, located in `/tests/dummy`
	  This build file does *not* influence how the addon or the app using it
	  behave. You most likely want to be modifying `./index.js` or app's build file
	*/

	app.import('node_modules/bootstrap/dist/css/bootstrap.css');
	// app.import('node_modules/popper.js/dist/umd/popper.js', {
	// 	using: [
	// 		{ transformation: 'amd', as: 'Popper' }
	// 	]
	// });

	return app.toTree();
};
