'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.sass
 * Compile Sass/Scss files
 */
NOAH.sass = (function(opts) {

    /** Requirements */
    var sass = require('node-sass');
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;
    var style = opts.style || 'expanded';

    var result = sass.renderSync({
        file: opts.src,
        outputStyle: style
    });

    mkdirp(getDirName(opts.dest), function(err) {
      if (err) return cb(err);
      fs.writeFile(opts.dest, result.css);
    });

    console.log(' ' + opts.dest + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.sass;