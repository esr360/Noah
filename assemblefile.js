/**
 * assemblefile.js
 *
 * Compiles Handlebars styleguides
 */
var path     = require('path');
var helpers  = require('handlebars-helpers');
var repeat   = require('handlebars-helper-repeat');
var extname  = require('gulp-extname');
var assemble = require('assemble');

var app = assemble();

// Register handlebars helpers
app.helpers(helpers());
app.helper('repeat', repeat);

// Define default options
app.option('assets', '../../');
app.option('layout', 'core.hbs');

app.file = function(file) {
  app.partials([
    'assets/templates/partials/**/*.hbs'
  ]);
  app.layouts('assets/templates/layouts/**/*.hbs');
  app.src(file, { assets: '../../' })
    .pipe(app.renderFile('hbs'))
    .pipe(extname('.html'))
    .pipe(app.dest('dist/'));
}

app.task('app', function() {
  app.file('assets/templates/pages/**/*.hbs');
});

module.exports = app;