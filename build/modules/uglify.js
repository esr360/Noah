'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.uglify
 * Used to minify/uglify Javascript files
 */
NOAH.uglify = (function(options) {

    /** Requirements */
    var fs = require('fs');
    var UglifyJS = require('uglify-js');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;

    var src = options.src;
    var distPath = options.dest;

    var result = UglifyJS.minify(src);

    mkdirp(getDirName(distPath), function (err) {
      if (err) return cb(err);
      fs.writeFile(distPath, result.code);
    });

    console.log(' ' + distPath + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.uglify;