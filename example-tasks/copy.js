'use strict';

var OLCS = OLCS || {};

OLCS.copy = require('../modules/copy').OLCS;

OLCS.copy({
  source: 'assets/_images', 
  dest: 'public/images/'
});