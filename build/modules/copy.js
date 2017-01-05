'use strict';

var NOAH = NOAH || {};

/** Requirements */
var fs = require('fs-extra');

/**
 * NOAH.copy
 * Copy a file/directory from one location to another
 */
NOAH.copy = (function(options) {
    // Options
    var src  = options.src;
    var dest = options.dest;

    fs.copy(src, dest, function(err) {
        if (err) return console.error(err);
    });
});

// Export the function to use in other files
exports.NOAH = NOAH.copy;