'use strict';

var NOAH = NOAH || {};

NOAH.test = require('../modules/karma').NOAH;

NOAH.test({
  component: '*',
  singlerun: true
});