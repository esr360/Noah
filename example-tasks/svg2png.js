'use strict';

var NOAH = NOAH || {};

NOAH.svg2png = require('../modules/svg2png').NOAH;

NOAH.svg2png({
  source: 'assets/_images/svg/',
  dest  : 'public/images/bitmap/'
});