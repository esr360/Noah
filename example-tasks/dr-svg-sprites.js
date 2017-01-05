'use strict';

var OLCS = OLCS || {};

OLCS.sprites = require('../modules/dr-svg-sprites').OLCS;

OLCS.sprites({
    previewPath: 'public/styleguides',
    spriteElementPath: 'assets/_images/svg',
    spritePath: 'public/images/svg/icon-sprite.svg',
    cssPath: 'assets/_styles/core/icon-sprite.scss',
    layout: 'vertical',
    cssSuffix: 'scss',
    unit: 50 
});