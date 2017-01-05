'use strict';

var NOAH = NOAH || {};

NOAH.uglify = require('../modules/uglify').NOAH;

// Selfserve
NOAH.uglify({
    src : 'public/js/selfserve.js',
    dest: 'public/js/selfserve.min.js'
});