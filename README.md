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

- CSS/Sass lint/autoprefix/compile
- JS concatenate/uglify/lint/unit test
- Assemble/Handlebars
- Browsersync
- General tasks

### Install

> Noah is a boilerplate rather than a dependency, so you may wish to fork this repo for your starting point. Noah is still available as an npm package, however:

```
npm install noah-npm
```

### Tasks

### Usage

Each executable task has its own `.js` file (found in the `/build/tasks/` directory) which is where your project specific details are passed for that task. Executing typically looks something like:

```
NOAH.task({
    src : 'public/js/selfserve.js',
    dest: 'public/js/selfserve.min.js'
});
```

The corresponding entry in `package.json` would look something like:

```
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

```
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