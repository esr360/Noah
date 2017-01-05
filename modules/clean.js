'use strict';

var OLCS = OLCS || {};

/** Requirements */
var fs = require('fs-extra');

/**
 * OLCS.clean
 * Clean a directory
 */
OLCS.clean = (function(options) {
  var dir = options.dir;
  fs.removeSync(dir);
});

// Export the function to use in other files
exports.OLCS = OLCS.clean;