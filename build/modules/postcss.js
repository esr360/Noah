'use strict';

var NOAH = NOAH || {};

// Requirements
var fs = require('fs');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

/**
 * NOAH.postcss
 * Run autoprefixer on a CSS file
 */
NOAH.postcss = (function(options) {

    // Options
    var src  = options.src;
    var dest = options.dest;

    var css = fs.readFileSync(src, 'utf8');

    postcss([autoprefixer]).process(css).then(function(result) {
        result.warnings().forEach(function(warn) {
            console.warn(warn.toString());
        });
        fs.writeFileSync(dest, result.css);
    });
});

// Export the function to use in other files
exports.NOAH = NOAH.postcss;