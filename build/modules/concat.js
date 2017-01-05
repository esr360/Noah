'use strict';

var NOAH = NOAH || {};

var filePaths = require('./file-paths').filePaths;

/**
 * NOAH.concat
 * Concatenate an array of files
 */
NOAH.concat = (function(options) {

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
exports.NOAH = NOAH.concat;

// Helper to get all scripts
NOAH.scripts = function(theme) {
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

// Export the scripts to be used by NOAH
exports.scripts = NOAH.scripts;