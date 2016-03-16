'use strict';

require('./survey-entry.css');

module.exports = require('angular').module('survey-entry', [])
    .component('surveyEntry', {
        template: require('./survey-entry.html'),
        controller: require('./survey-entry-controller')
    });
