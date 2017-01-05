'use strict';

var OLCS = OLCS || {};

/** Requirements */
var fs = require('fs-extra');

/**
 * OLCS.copy
 * Copy a file/directory from one location to another
 */
OLCS.copy = (function(options) {
    var source = options.source;
    var dest = options.dest;

    fs.copy(source, dest, function(err) {
        if (err) return console.error(err);
    });
});

// Export the function to use in other files
exports.OLCS = OLCS.copy;