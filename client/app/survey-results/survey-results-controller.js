'use strict';

/* @ngInject */
function SurveyResultsController($scope, surveyResultsFactory) {
    $scope.alerts = [];

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.getResults = function () {
        surveyResultsFactory.getResults({}).then(function (results) {
            $scope.results = results;
        }).catch(function () {
            $scope.alerts.push({ type: 'failure', msg: 'cant get results'});
        });
    };

    $scope.getResults();

}



module.exports = SurveyResultsController;