'use strict';

var NOAH = NOAH || {};

// Requirements
var fs  = require('fs');
var bs  = require('browser-sync').create();
var app = require('../../assemblefile');

/**
 * NOAH.serve
 * Start a server using BrowserSync
 */
NOAH.serve = (function(options) {
  bs.init(options);
});

// Export the function to use in other files
exports.NOAH = NOAH.serve;