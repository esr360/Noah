'use strict';

var OLCS = OLCS || {};

/** Requirements */
var karma = require('karma').Server

/**
 * OLCS.test
 * Run unit tests using Karma
 */
OLCS.test = (function(options) {

  var component = options.component || '*';
  var callback  = options.callback || process.exit;
  var singlerun = (options.singlerun !== 'undefined') ? options.singlerun : true;

  karma.start({

      frameworks: [
        'mocha', 
        'chai', 
        'sinon-chai'
      ],

      plugins: [
        'karma-chai-plugins',
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-phantomjs-launcher'
      ],

      files: [
        'assets/_js/vendor/jquery.1.11.0.js',
        'assets/_js/vendor/**/*.js',
        'assets/_js/components/*.js',
        'test/js/setup.js',
        'test/js/' + component + '.test.js'
      ],

      reporters: ['mocha'],

      browsers: ['PhantomJS'],

      client: {
        captureConsole: true
      },

      singleRun: singlerun,
      port: 9876,
      colors: true,
      autoWatch: true

  }, callback);

});

// Export the function to use in other files
exports.OLCS = OLCS.test;