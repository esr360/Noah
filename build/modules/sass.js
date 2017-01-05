'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.sass
 * Compile Sass/Scss files
 */
NOAH.sass = (function(options) {

    /** Requirements */
    var sass = require('node-sass');
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var getDirName = require('path').dirname;
    var style = options.style || 'expanded';

    var result = sass.renderSync({
        file: options.src,
        outputStyle: style
    });

    mkdirp(getDirName(options.dest), function(err) {
      if (err) return cb(err);
      fs.writeFile(options.dest, result.css);
    });

    console.log(' ' + options.dest + ' built.');
});

// Export the function to use in other files
exports.NOAH = NOAH.sass;