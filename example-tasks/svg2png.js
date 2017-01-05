'use strict';

var OLCS = OLCS || {};

OLCS.svg2png = require('../modules/svg2png').OLCS;

OLCS.svg2png({
  source: 'assets/_images/svg/',
  dest  : 'public/images/bitmap/'
});