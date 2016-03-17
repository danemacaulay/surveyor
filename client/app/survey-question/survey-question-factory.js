'use strict';

/* @ngInject */
function SurveyQuestionFactory($http) {

    function getExcludedIDs() {
        var store = localStorage.getItem('surveysToExclude') || '[]';
        return JSON.parse(store);
    }

    function pushToExcludedIDs(id) {
        var ids = getExcludedIDs();
        ids.push(id);
        localStorage.setItem('surveysToExclude', JSON.stringify(ids));
    }

    function getSurvey() {
        var params = {};
        var surveysToExclude = getExcludedIDs();
        if (surveysToExclude.length) {
            params.surveysToExclude = surveysToExclude;
        }
        return $http.get('/services/survey', {params: params}).then(function (resp) {
            var survey = resp.data;
            survey.options = JSON.parse(survey.options);
            return survey;
        });
    }

    function postResponse(surveyId, response) {
        var data = {
            surveyId: surveyId,
            response: response
        };
        return $http.post('/services/response', data).then(function () {
            pushToExcludedIDs(surveyId);
        });
    }

    return {
        getExcludedIDs: getExcludedIDs,
        getSurvey: getSurvey,
        postResponse: postResponse,
        pushToExcludedIDs: pushToExcludedIDs
    };

}



module.exports = SurveyQuestionFactory;