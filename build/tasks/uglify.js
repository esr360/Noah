'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.uglify = require('../modules/uglify').NOAH;

NOAH.uglify({
    src : 'dist/js/example.js',
    dest: 'dist/js/example.min.js'
});

NOAH.uglify({
    src : 'dist/js/vendor.js',
    dest: 'dist/js/vendor.min.js'
});
