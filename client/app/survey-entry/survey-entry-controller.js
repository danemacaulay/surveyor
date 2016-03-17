'use strict';

/* @ngInject */
function SurveyEntryController($scope, $http) {

    function initEntry() {
        $scope.entry = {
            title: '',
            body: '',
            options: ''
        };
    }

    $scope.alerts = [];


    $scope.submitSurvey = function () {
        var options = JSON.stringify($scope.entry.options.split('\n'));
        var data = {title: $scope.entry.title, body: $scope.entry.body, options: options};
        $http.post('/services/survey', data).then(function () {
            $scope.alerts.push({ type: 'success', msg: 'you submitted a new survey question'});
            initEntry();
        }).catch(function () {
            $scope.alerts.push({ type: 'failure', msg: 'unable to submit survey question'});
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    initEntry();

}



module.exports = SurveyEntryController;