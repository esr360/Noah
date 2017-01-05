'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.copy = require('../modules/copy').NOAH;

NOAH.copy({
    src : 'assets/images/', 
    dest: 'dist/images/'
});