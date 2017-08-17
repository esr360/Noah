'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.uglify
 * Used to minify/uglify Javascript files
 */
NOAH.uglify = (function(options) {

    // Requirements
    var fs = require('fs');
    var UglifyJS = require('uglify-js');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;

    // Options
    var src  = options.src;
    var dest = options.dest;

    var result = UglifyJS.minify(src);

    mkdirp(getDirName(dest), function (err) {
      if (err) return cb(err);
      fs.writeFile(dest, result.code, (err) => {
        if (err) throw err;
      });
    });

    console.log(' ' + dest + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.uglify;
