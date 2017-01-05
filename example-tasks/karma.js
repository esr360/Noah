'use strict';

var OLCS = OLCS || {};

OLCS.test = require('../modules/karma').OLCS;

OLCS.test({
  component: '*',
  singlerun: true
});