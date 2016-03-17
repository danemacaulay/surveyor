'use strict';

/* @ngInject */
function SurveyQuestionController($scope, surveyQuestionFactory) {

    function initSurvey() {
        $scope.survey = {
            title: '',
            body: '',
            response: '',
        };
    }

    $scope.alerts = [];


    $scope.getQuestion = function () {
        initSurvey();
        surveyQuestionFactory.getSurvey().then(function (survey) {
            $scope.survey = survey;
        }).catch(function () {
            $scope.alerts.push({ type: 'failure', msg: 'unable to get survey question'});
        });
    };

    $scope.submitSurvey = function () {
        surveyQuestionFactory.postResponse($scope.survey.id, $scope.survey.response).then(function () {
            $scope.alerts.push({ type: 'success', msg: 'submitted survey successfully'});
            $scope.getQuestion();
        }).catch(function () {
            $scope.alerts.push({ type: 'failure', msg: 'unable to submit survey question'});
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.getQuestion();

}



module.exports = SurveyQuestionController;