'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.test = require('../modules/karma').NOAH;

NOAH.test({
    files: [
        'assets/vendor/**/*.js',
        'assets/js/*.js',
        'test/js/*.test.js'
    ],
    singlerun: true
});