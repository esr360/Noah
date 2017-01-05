'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.test = require('../modules/karma').NOAH;

NOAH.test({
    component: '*',
    singlerun: true
});