# Noah

> Noah is a boilerplate for building front-end web apps using NPM build scripts.

### Why NPM scripts?

- Fewer dependencies (no need for Grunt/Gulp)
- Speed
- Future proof

### Why Noah?

- Includes everything required to get going off the bat
- 100% Windows friendly (built for OSX)
- Adaptable/scalable to suit your project
- Built for the modern front-end developer
- Favours API usage over CLI wrappers

### What's included?

- CSS/Sass lint|autoprefix|compile
- JS concatenate|uglify|lint|unit test
- Assemble/Handlebars
- Browsersync
- General tasks

### Install

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
| Karma         | Run JS unit tests                               | npm run test        |
| PostCSS       | Run Autoprefixer                                | npm run postcss     |
| Sass          | Compile Sass                                    | npm run sass        |
| Sass-lint     | Lint Sass files                                 | npm run scsslint    |
| Uglify        | Uglify JS files                                 | npm run uglify      |

#### Asset Tasks

| Task          | Description                                     | Execute             |
| ------------- | ----------------------------------------------- | ------------------- |
| Templates     | Run all required tasks to compile templates     | npm run templates   |
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

Each executable task has its own `.js` file (found in the `/build/tasks/` directory) which is where your project specific details are passed for that task. Executing a task typically looks something like:

```js
NOAH.task({
    src : 'public/js/selfserve.js',
    dest: 'public/js/selfserve.min.js'
});
```

The corresponding entry in `package.json` would look something like:

```json
"scripts": {
    "task": "node ./build/tasks/task.js"
}
```

And is executed from the command line by:

```
npm run task
```

Where `task` is the name of the script/task to run.

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

#### Configure