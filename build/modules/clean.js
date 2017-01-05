'use strict';

var NOAH = NOAH || {};

/** Requirements */
var fs = require('fs-extra');

/**
 * NOAH.clean
 * Clean a directory
 */
NOAH.clean = (function(options) {
    // Options
    var dir = options.dir;

    fs.removeSync(dir);
});

// Export the function to use in other files
exports.NOAH = NOAH.clean;