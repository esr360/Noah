'use strict';

var NOAH = NOAH || {};

NOAH.uglify = require('../modules/uglify').NOAH;

NOAH.uglify({
    src : 'dist/js/example.js',
    dest: 'dist/js/example.min.js'
});