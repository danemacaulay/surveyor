'use strict';

require('./survey-entry.css');

module.exports = require('angular').module('survey-entry', [])
    .component('readingEntry', {
        template: require('./survey-entry.html'),
        controller: require('./survey-entry-controller')
    });
