'use strict';

/* @ngInject */
function SurveyEntryController($scope, $rootScope, $http) {

    var user;

    function init(evt, authedUser) {
        user = authedUser;
    }

    $scope.alerts = [];

    $scope.entry = {
        title: '',
        body: '',
    };

    $scope.submitSurvey = function () {
        var data = {title: $scope.entry.title, body: $scope.entry.body};
        $http.post('/services/survey', data).then(function () {
            $scope.alerts.push({ type: 'success', msg: 'you submitted a new survey question'});
        }).catch(function () {
            $scope.alerts.push({ type: 'failure', msg: 'unable to submit survey question'});
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $rootScope.$on('login', init);

}



module.exports = SurveyEntryController;