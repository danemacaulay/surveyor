'use strict';

require('./survey-results.css');

module.exports = require('angular').module('survey-results', [])
    .component('surveyResults', {
        template: require('./survey-results.html'),
        controller: require('./survey-results-controller')
    })
    .factory('surveyResultsFactory', require('./survey-results-factory'));
