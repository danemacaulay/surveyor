'use strict';

/* @ngInject */
function LoginModalController($rootScope, $scope, $window, $uibModalInstance, $http) {

    function handleLogin(error, authData) {
        if (error) {
            $scope.form.msgTranslateId = 'login-failed';
            return;
        }
        $uibModalInstance.close(authData);
    }

    $scope.login = function() {
        $http.post('/services/authentication').then(handleLogin);
    };

}

module.exports = LoginModalController;