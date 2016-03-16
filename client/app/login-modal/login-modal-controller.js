'use strict';

/* @ngInject */
function LoginModalController($rootScope, $scope, $window, $uibModalInstance, $http) {

    $scope.form = {
        msgTranslateId: ''
    };

    function handleFailure() {
        $scope.form.msgTranslateId = 'login-failed';
    }

    function handleLogin(authData) {
        $uibModalInstance.close(authData);
    }

    $scope.login = function() {
        var data = {username: $scope.user.email, password: $scope.user.password};
        $http.post('/services/authentication', data).then(handleLogin).catch(handleFailure);
    };

}

module.exports = LoginModalController;