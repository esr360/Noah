'use strict';

var NOAH = NOAH || {};

var bs = require('browser-sync').create();
var app = require('../../assemblefile');
var extname = require('gulp-extname');

/** Custom Tasks */
NOAH.serve   = require('../modules/browser-sync').NOAH;
NOAH.sass    = require('../modules/sass').NOAH;
NOAH.concat  = require('../modules/concat').NOAH;
NOAH.scripts = require('../modules/concat').scripts;
NOAH.uglify  = require('../modules/uglify').NOAH;
NOAH.test    = require('../modules/karma').NOAH;

NOAH.serve({
    notify: false,
    open: false,
    files: [
      'public/styles/*.css', 
      'public/js/*.js',
      'public/styleguides/**/*.html'
    ],
    server: {
        baseDir: 'public'
    }
});

// Watch Sass files
bs.watch('assets/_styles/**/*.scss', function(event, file) {
    if (event === 'change') {
      NOAH.sass({
          src : 'assets/_styles/themes/selfserve.scss',
          dest: 'public/styles/selfserve.css'
      });
    }
});

// Watch JS files
bs.watch('assets/_js/**/*.js', function(event, file) {
    var filename = file.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
    if (event === 'change') {
      NOAH.test({
          component: filename,
          singlerun: false
      });
      NOAH.concat({
          src : NOAH.scripts('selfserve'),
          dest: 'public/js/selfserve.js'
      });
      NOAH.uglify({
          src : 'public/js/selfserve.js',
          dest: 'public/js/selfserve.min.js'
      });
    }
});

// Watch HBS files
bs.watch('styleguides/**/*.hbs', function(event, file) {
    if (event === 'change') {
      var theme = file.replace(/^/, '').split('/')[1];
      app.file(theme, file);
    }
});