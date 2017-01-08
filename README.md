# Noah

> Noah is a boilerplate for compiling front-end web apps using NPM build scripts.

- [Install](#install)
- [Tasks](#tasks)
- [Usage](#usage)
- [Dependencies](#dependencies)

### Why NPM scripts?

- Fewer dependencies (no need for Grunt/Gulp, and their respective task wrappers)
- Speed (by the time you click from your text editor to your browser, your code has already been recompiled and injected into the browser)
- ~~More~~ Total control over your build steps
- Future proof (protect your project from time-travellers)

### Why Noah?

> Compile, test and depoly code on the fly as you develop

- Includes everything required to get going off the bat
- Adaptable/scalable to suit your project
- Built for the modern front-end developer
- Favours API usage over CLI wrappers

### What's included?

- CSS/Sass lint | autoprefix | compile
- JS concatenate | uglify | lint | unit test
- Assemble/Handlebars
- Browsersync + watching & live reload
- Git pre-commit hook - never commit bad code again
- General tasks

### Install

#### Requirements

All plugins use pure Node.js bindings, so the only things required are:

- Node.js
- NPM

> Noah is a boilerplate rather than a dependency, so you may wish to fork this repo for your starting point. Noah is still available as an npm package, however:

```
npm install noah-npm
```

### Tasks

#### Core Tasks

| Task          | Description                                     | Execute             |
| ------------- | ----------------------------------------------- | ------------------- |
| Assemble      | Compile handlebars templates                    | npm run assemble    |
| Browsersync   | Start a new server and watch JS/CSS files       | npm run browsersync |
| Clean         | Clean/empty a directory                         | npm run clean       |
| Concat        | Concatenate multiple files                      | npm run concat      |
| Copy          | Copy files to a new location                    | npm run copy        |
| JS-lint       | Lint JS files                                   | npm run jshint      |
| Karma         | Run JS unit tests                               | npm run test        |
| PostCSS       | Run Autoprefixer                                | npm run postcss     |
| Sass          | Compile Sass                                    | npm run sass        |
| Sass-lint     | Lint Sass files                                 | npm run scsslint    |
| Uglify        | Uglify JS files                                 | npm run uglify      |

#### Asset Tasks

| Task          | Description                                     | Execute             |
| ------------- | ----------------------------------------------- | ------------------- |
| Images        | Copy images to `dist` directory                 | npm run images      |
| CSS           | Compile Sass and run Autoprefixer               | npm run css         |
| JS            | Concatenate and uglify JS files                 | npm run js          |

#### Combined Tasks

Run specific tasks from above in a specific order

| Task          | Description                                                      | Execute             |
| ------------- | ---------------------------------------------------------------- | ------------------- |
| Compile       | Runs `scsslint`, `jshint`, `clean`, `css`, `js` & `images` tasks | npm run compile     |
| Build         | Runs `compile` and `templates` tasks                             | npm run build       |
| Serve         | Runs `build` and `browsersync` tasks                             | npm run serve       |
| Go            | Short alias for `browsersync` task                               | npm run go          |
| CI            | Reserved for continuous integration tools, e.g. Travis/Jenkins   | npm run ci          |

### Usage

Most executable tasks have their own `.js` file &ast; (found in the `/build/tasks/` directory) which is where your project specific details are passed for that task. Executing a task typically looks something like:

```js
NOAH.task({
    option : value
});
```

The corresponding entry in `package.json` would look something like:

```json
"scripts": {
    "yourTask": "node ./build/tasks/task.js"
}
```

And is executed from the command line by:

```
npm run yourTask
```

<small>&ast; Currently the `jshint` and `scsslint` tasks are executed via their CLI interface, as opposed to their API, pending future investigation.</small>

Each task has a default, basic-usage example, which will likely need to be modified for your project. Ensure you go through each task and check the options reflect your project's structure. For example, if your project requires two CSS files to be compiled, you may have something like this in your `/build/tasks/sass.js` file:

```js
// Theme
NOAH.sass({
    src : 'assets/styles/themes/internal.scss',
    dest: 'public/styles/internal.css'
});

// Print
NOAH.sass({
    src : 'assets/styles/themes/print.scss',
    dest: 'public/styles/print.css'
});
```

> No matter how many entries you have, they will all be executed when running `npm run sass` from the command line.

### Dependencies

Noah installs the following NPM dependencies:

```json
"dependencies": {
    "assemble"                : "^0.17.1",
    "autoprefixer"            : "^6.5.1",
    "browser-sync"            : "^2.18.5",
    "chai"                    : "^3.5.0",
    "fs-extra"                : "^0.30.0",
    "gulp-extname"            : "^0.2.2",
    "handlebars"              : "^4.0.5",
    "handlebars-helper-repeat": "^0.3.1",
    "handlebars-helpers"      : "^0.7.5",
    "jshint"                  : "^2.9.4",
    "jshint-stylish"          : "^2.2.1",
    "karma"                   : "^1.3.0",
    "karma-chai-plugins"      : "^0.8.0",
    "karma-mocha"             : "^1.2.0",
    "karma-mocha-reporter"    : "^2.2.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "mkdirp"                  : "^0.5.1",
    "mocha"                   : "^3.1.2",
    "mz"                      : "^2.4.0",
    "node-sass"               : "^3.10.1",
    "npm-run-all"             : "^3.1.1",
    "postcss"                 : "^5.2.5",
    "pre-commit"              : "^1.1.3",
    "sass-lint"               : "^1.9.1",
    "uglify-js"               : "^2.7.4"
  }
```

### Develop

Whilst Noah comes with everything you might need to get going, you still may wish to expand upon the default tasks. Every new task will need its own `.js` task file configured, which, depending on the plugin, may or may not be simple to do.

Noah comes with some useful additional tools to facilitate development of new tasks.

##### `file-paths.js`

This helper module is used to get an array of files from a specified directory.

```js
var filePaths = require('./file-paths').filePaths;
var components = filePaths('assets/_js/components/'); // returns all files in this directory
```