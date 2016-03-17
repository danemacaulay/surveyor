'use strict';

/* @ngInject */
function NavController($scope, $rootScope, $translate, $window, $uibModal, appFactory) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $scope.login = function() {
        var modalInstance = $uibModal.open({
            template: require('../login-modal/login-modal.html'),
            controller: 'loginModalController',
        });

        modalInstance.result.then(function (user) {
            $scope.user = user;
            appFactory.setUser(user);
        });
    };

    $scope.logout = function () {
        $window.sessionStorage.clear();
        $window.location.reload();
    };

}

module.exports = NavController;