'use strict';

var OLCS = OLCS || {};

OLCS.postcss = require('../modules/postcss').OLCS;

// Selfserve
OLCS.postcss({
    source: 'public/styles/selfserve.css',
    dest  : 'public/styles/selfserve.css'
});

// Internal
OLCS.postcss({
    source: 'public/styles/internal.css',
    dest  : 'public/styles/internal.css'
});