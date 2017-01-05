'use strict';

var NOAH = NOAH || {};

NOAH.postcss = require('../modules/postcss').NOAH;

NOAH.postcss({
    src : 'dist/css/example.css',
    dest: 'dist/css/example.css'
});