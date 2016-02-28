'use strict';

const Package = require('../package.json');

var swaggerOptions = {
	apiVersion: Package.version,
	pathPrefixSize: 1
};

module.exports = swaggerOptions;
