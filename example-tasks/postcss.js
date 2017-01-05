'use strict';

var NOAH = NOAH || {};

NOAH.postcss = require('../modules/postcss').NOAH;

// Selfserve
NOAH.postcss({
    source: 'public/styles/selfserve.css',
    dest  : 'public/styles/selfserve.css'
});

// Internal
NOAH.postcss({
    source: 'public/styles/internal.css',
    dest  : 'public/styles/internal.css'
});