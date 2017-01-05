'use strict';

var OLCS = OLCS || {};

/** Requirements */
var fs = require('fs');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

/**
 * OLCS.postcss
 * Run autoprefixer on a CSS file
 */
OLCS.postcss = (function(options) {
    var source = options.source;
    var dest = options.dest;

    var css = fs.readFileSync(source, 'utf8');

    postcss([autoprefixer]).process(css).then(function(result) {
        result.warnings().forEach(function(warn) {
            console.warn(warn.toString());
        });
        fs.writeFileSync(dest, result.css);
    });
});

// Export the function to use in other files
exports.OLCS = OLCS.postcss;