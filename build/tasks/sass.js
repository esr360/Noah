'use strict';

var NOAH = NOAH || {};

NOAH.sass = require('../modules/sass').NOAH;

// Selfserve
NOAH.sass({
    src : 'assets/_styles/themes/selfserve.scss',
    dest: 'public/styles/selfserve.css'
});

// Selfserve
NOAH.sass({
    src  : 'assets/_styles/themes/selfserve.scss',
    dest : 'public/styles/selfserve.min.css',
    style: 'compressed'
});