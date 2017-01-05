'use strict';

var NOAH = NOAH || {};

NOAH.concat  = require('../modules/concat').NOAH;
NOAH.scripts = require('../modules/concat').scripts;

// Selfserve
NOAH.concat({
    src : NOAH.scripts('selfserve'),
    dest: 'public/js/selfserve.js'
});

// Internal
NOAH.concat({
    src : NOAH.scripts('internal'),
    dest: 'public/js/internal.js'
});