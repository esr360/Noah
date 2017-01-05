'use strict';

var OLCS = OLCS || {};

OLCS.concat  = require('../modules/concat').OLCS;
OLCS.scripts = require('../modules/concat').scripts;

// Selfserve
OLCS.concat({
    src : OLCS.scripts('selfserve'),
    dest: 'public/js/selfserve.js'
});

// Internal
OLCS.concat({
    src : OLCS.scripts('internal'),
    dest: 'public/js/internal.js'
});