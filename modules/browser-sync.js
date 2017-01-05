'use strict';

var OLCS = OLCS || {};

/** Requirements */
var fs = require('fs');
var bs = require('browser-sync').create();
var app = require('../../assemblefile');

/**
 * OLCS.serve
 * Start a server using BrowserSync
 */
OLCS.serve = (function(options) {
  bs.init(options);
});

// Export the function to use in other files
exports.OLCS = OLCS.serve;