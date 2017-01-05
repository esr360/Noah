'use strict';

var NOAH = NOAH || {};

// Requirements
var filePaths = require('../modules/file-paths').filePaths;
NOAH.concat   = require('../modules/concat').NOAH;

NOAH.concat({
    src : filePaths('assets/js/'),
    dest: 'dist/js/example.js'
});