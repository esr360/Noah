'use strict';

var NOAH = NOAH || {};

/**
 * NOAH.filePaths
 * Get an array of files from a directory
 */
NOAH.filePaths = (function(dir, filelist) {
    var path = path || require('path');
    var fs = fs || require('fs');
    var files = fs.readdirSync(dir);

    // ignore these files
    var blacklist = [
      '.DS_Store'
    ]

    filelist = filelist || [];

    files.forEach(function(file) {
        if (blacklist.indexOf(file) > -1) {
            console.log('file list contains suspicious file(s) which have been excluded: ' + file);
        } else {
            if (fs.statSync(path.join(dir, file)).isDirectory()) {
                filelist = walkSync(path.join(dir, file), filelist);
            }
            else {
                filelist.push(dir + file);
            }
        }
    });

    return filelist;
});

exports.filePaths = NOAH.filePaths;