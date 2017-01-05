'use strict';

var NOAH = NOAH || {};

NOAH.uglify = require('../modules/uglify').NOAH;

// Selfserve
NOAH.uglify({
    src : 'public/js/selfserve.js',
    dest: 'public/js/selfserve.min.js'
});

// Internal
NOAH.uglify({
    src : 'public/js/internal.js',
    dest: 'public/js/internal.min.js'
});