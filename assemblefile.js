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
app.option('layout', 'base.hbs');

app.file = function(theme, file) {
  app.partials([
    'styleguides/partials/**/*.hbs',
    'styleguides/' + theme + '/partials/**/*.hbs',
  ]);
  app.layouts('styleguides/' + theme + '/layouts/**/*.hbs');
  app.src(file, { assets: '../../' })
    .pipe(app.renderFile('hbs'))
    .pipe(extname('.html'))
    .pipe(app.dest('public/styleguides/' + theme));
}

app.task('app', function() {
  app.file('app', 'styleguides/app/pages/**/*.hbs');
});

module.exports = app;