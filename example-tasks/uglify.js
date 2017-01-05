'use strict';

var OLCS = OLCS || {};

OLCS.uglify = require('../modules/uglify').OLCS;

// Selfserve
OLCS.uglify({
    src : 'public/js/selfserve.js',
    dest: 'public/js/selfserve.min.js'
});

// Internal
OLCS.uglify({
    src : 'public/js/internal.js',
    dest: 'public/js/internal.min.js'
});