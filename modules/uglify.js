'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.uglify
 * Used to minify/uglify Javascript files
 */
NOAH.uglify = (function(opts) {

    /** Requirements */
    var fs = require('fs');
    var UglifyJS = require('uglify-js');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;

    var source = opts.src;
    var distPath = opts.dest;

    var result = UglifyJS.minify(source);

    mkdirp(getDirName(distPath), function (err) {
      if (err) return cb(err);
      fs.writeFile(distPath, result.code);
    });

    console.log(' ' + distPath + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.uglify;