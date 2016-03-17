'use strict';

require('./survey-question.css');

module.exports = require('angular').module('survey-question', [])
    .component('surveyQuestion', {
        template: require('./survey-question.html'),
        controller: require('./survey-question-controller')
    })
    .factory('surveyQuestionFactory', require('./survey-question-factory'));
