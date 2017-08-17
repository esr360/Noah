'use strict';

var NOAH = NOAH || {};

var filePaths = require('./file-paths').filePaths;

/**
 * NOAH.concat
 * Concatenate an array of files
 */
NOAH.concat = (function(options) {

    // Requirements
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;

    // Options
    var files = options.src;
    var dest  = options.dest;

    var out = files.map(function(filePath) {
        return fs.readFileSync(filePath).toString();
    });

    mkdirp(getDirName(dest), function (err) {
      if (err) return cb(err);
      fs.writeFile(dest, out.join('\n'), (err) => {
         if (err) throw err;
      });
    });

    console.log(' ' + dest + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.concat;
