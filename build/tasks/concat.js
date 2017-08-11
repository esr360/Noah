'use strict';

var NOAH = NOAH || {};

// Requirements
var filePaths = require('../modules/file-paths').filePaths;
NOAH.concat   = require('../modules/concat').NOAH;

NOAH.concat({
    src : filePaths('assets/js/'),
    dest: 'dist/js/example.js'
});

NOAH.concat({
    src : filePaths('assets/vendor/css/'),
    dest: 'dist/css/vendor.css'
});

NOAH.concat({
    src : filePaths('assets/vendor/js/'),
    dest: 'dist/js/vendor.js'
});
