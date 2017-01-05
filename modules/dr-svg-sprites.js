'use strict';

var NOAH = NOAH || {};

/** Requirements */
var builder = require('dr-svg-sprites');

/**
 * NOAH.sprites
 * Create a sprite from a set of source images
 */
NOAH.sprites = (function(options) {
  builder(options);
});

// Export the function to use in other files
exports.NOAH = NOAH.sprites;