'use strict';

var NOAH = NOAH || {};

NOAH.postcss = require('../modules/postcss').NOAH;

// Selfserve
NOAH.postcss({
    src : 'public/styles/selfserve.css',
    dest: 'public/styles/selfserve.css'
});