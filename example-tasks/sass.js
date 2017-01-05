'use strict';

var NOAH = NOAH || {};

NOAH.sass = require('../modules/sass').NOAH;

// Selfserve
NOAH.sass({
    src : 'assets/_styles/themes/selfserve.scss',
    dest: 'public/styles/selfserve.css'
});

// Internal
NOAH.sass({
    src : 'assets/_styles/themes/internal.scss',
    dest: 'public/styles/internal.css'
});

// Print
NOAH.sass({
    src : 'assets/_styles/themes/print.scss',
    dest: 'public/styles/print.css'
});

// Selfserve
NOAH.sass({
    src  : 'assets/_styles/themes/selfserve.scss',
    dest : 'public/styles/selfserve.min.css',
    style: 'compressed'
});

// Internal
NOAH.sass({
    src  : 'assets/_styles/themes/internal.scss',
    dest : 'public/styles/internal.min.css',
    style: 'compressed'
});

// Print
NOAH.sass({
    src  : 'assets/_styles/themes/print.scss',
    dest : 'public/styles/print.min.css',
    style: 'compressed'
});