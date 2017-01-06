/**
 * assemblefile.js
 *
 * Compiles Handlebars templates
 */
var path     = require('path');
var helpers  = require('handlebars-helpers');
var repeat   = require('handlebars-helper-repeat');
var extname  = require('gulp-extname');
var assemble = require('assemble');

var app = assemble({
    layout: 'core.hbs'
});

// Set the assets directory
app.data('assets', '../');

// Register handlebars helpers
app.helpers(helpers());
app.helper('repeat', repeat);

app.file = function(file) {
  app.partials('assets/templates/partials/**/*.hbs');
  app.layouts('assets/templates/layouts/**/*.hbs');
  app.src(file)
    .pipe(app.renderFile('hbs'))
    .pipe(extname('.html'))
    .pipe(app.dest('dist/'));
}

app.task('app', function() {
  app.file('assets/templates/pages/**/*.hbs');
});

module.exports = app;