'use strict';

var OLCS = OLCS || {};

/** Requirements */
var builder = require('dr-svg-sprites');

/**
 * OLCS.sprites
 * Create a sprite from a set of source images
 */
OLCS.sprites = (function(options) {
  builder(options);
});

// Export the function to use in other files
exports.OLCS = OLCS.sprites;