'use strict';

/* @ngInject */
function SurveyResultsFactory($http) {

    function getResults(params) {
        return $http.get('/services/results', {params: params}).then(function (resp) {
            var resultsData = resp.data;
            return resultsData;
        });
    }

    return {
        getResults: getResults,
    };

}



module.exports = SurveyResultsFactory;