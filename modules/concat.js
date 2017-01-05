'use strict';

var OLCS = OLCS || {};

var filePaths = require('./file-paths').filePaths;

/**
 * OLCS.concat
 * Concatenate an array of files
 */
OLCS.concat = (function(options) {

    /** Requirements */
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;

    var files = options.src;
    var dest = options.dest;

    var out = files.map(function(filePath) {
        return fs.readFileSync(filePath).toString();
    });

    mkdirp(getDirName(dest), function (err) {
      if (err) return cb(err);
      fs.writeFile(dest, out.join('\n'));
    });

    console.log(' ' + dest + ' built.');
});

// Export the function to use in other files
exports.OLCS = OLCS.concat;

// Helper to get all scripts
OLCS.scripts = function(theme) {
    return [
        'assets/_js/vendor/jquery.1.11.0.js',
        'assets/_js/vendor/chosen.jquery.min.js',
        'assets/_js/vendor/jquery.details.min.js',
    ].concat(
        filePaths('assets/_js/components/')
    ).concat([
        'assets/_js/init/common.js',
        'assets/_js/init/' + theme + '.js'
    ]);
}

// Export the scripts to be used by OLCS
exports.scripts = OLCS.scripts;