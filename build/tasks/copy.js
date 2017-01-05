'use strict';

var NOAH = NOAH || {};

NOAH.copy = require('../modules/copy').NOAH;

NOAH.copy({
  src : 'assets/images/', 
  dest: 'public/images/'
});