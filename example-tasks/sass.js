'use strict';

var OLCS = OLCS || {};

OLCS.sass = require('../modules/sass').OLCS;

// Selfserve
OLCS.sass({
    src : 'assets/_styles/themes/selfserve.scss',
    dest: 'public/styles/selfserve.css'
});

// Internal
OLCS.sass({
    src : 'assets/_styles/themes/internal.scss',
    dest: 'public/styles/internal.css'
});

// Print
OLCS.sass({
    src : 'assets/_styles/themes/print.scss',
    dest: 'public/styles/print.css'
});

// Selfserve
OLCS.sass({
    src  : 'assets/_styles/themes/selfserve.scss',
    dest : 'public/styles/selfserve.min.css',
    style: 'compressed'
});

// Internal
OLCS.sass({
    src  : 'assets/_styles/themes/internal.scss',
    dest : 'public/styles/internal.min.css',
    style: 'compressed'
});

// Print
OLCS.sass({
    src  : 'assets/_styles/themes/print.scss',
    dest : 'public/styles/print.min.css',
    style: 'compressed'
});