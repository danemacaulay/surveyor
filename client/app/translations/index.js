'use strict';

module.exports = require('angular').module('surveyor-translations', [
        'pascalprecht.translate'
    ])
    .config(require('./translations-config'));
