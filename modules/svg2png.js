'use strict';

var NOAH = NOAH || {};

/** Requirements */
const fs = require('mz/fs');
const svg2png = require('svg2png');

/**
 * NOAH.svg2png
 * Convert .svg images into .png
 */
NOAH.svg2png = (function(options) {
    var source = options.source;
    var dest = options.dest;
    
    var files = fs.readdirSync(source);

    // ignore these files
    var blacklist = [
      '.DS_Store'
    ]

    files.forEach(function(file) {
        var fileName = file.slice(0, -4);

        if (blacklist.indexOf(file) > -1) {
            console.log('file list contains suspicious file(s) which have been excluded: ' + file);
        } else {
            fs.readFile(source + file)
                .then(svg2png)
                .then(buffer => fs.writeFile(dest + fileName + '.png', buffer))
                .catch(e => console.error(e));
        }
    });
});

// Export the function to use in other files
exports.NOAH = NOAH.svg2png;