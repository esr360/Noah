'use strict';

var NOAH = NOAH || {};

NOAH.copy = require('../modules/copy').NOAH;

NOAH.copy({
  source: 'assets/_images', 
  dest: 'public/images/'
});