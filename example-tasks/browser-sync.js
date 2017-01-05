'use strict';

var OLCS = OLCS || {};

var bs = require('browser-sync').create();
var app = require('../../assemblefile');
var extname = require('gulp-extname');

/** Custom Tasks */
OLCS.serve   = require('../modules/browser-sync').OLCS;
OLCS.sass    = require('../modules/sass').OLCS;
OLCS.concat  = require('../modules/concat').OLCS;
OLCS.scripts = require('../modules/concat').scripts;
OLCS.uglify  = require('../modules/uglify').OLCS;
OLCS.test    = require('../modules/karma').OLCS;

OLCS.serve({
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
      OLCS.sass({
          src : 'assets/_styles/themes/selfserve.scss',
          dest: 'public/styles/selfserve.css'
      });
      OLCS.sass({
          src : 'assets/_styles/themes/internal.scss',
          dest: 'public/styles/internal.css'
      });
    }
});

// Watch JS files
bs.watch('assets/_js/**/*.js', function(event, file) {
    var filename = file.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
    if (event === 'change') {
      OLCS.test({
          component: filename,
          singlerun: false
      });
      OLCS.concat({
          src : OLCS.scripts('selfserve'),
          dest: 'public/js/selfserve.js'
      });
      OLCS.uglify({
          src : 'public/js/selfserve.js',
          dest: 'public/js/selfserve.min.js'
      });
      OLCS.concat({
          src : OLCS.scripts('internal'),
          dest: 'public/js/internal.js'
      });
      OLCS.uglify({
          src : 'public/js/internal.js',
          dest: 'public/js/internal.min.js'
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