'use strict';

/* @ngInject */
function AppController($timeout, $scope, $rootScope, $uibModal, $window, appFactory) {

    $scope.user = appFactory.getUser();

    if ($scope.user) {
        $timeout(function () {
            // need time for child controllers to initialize #shameface
            $rootScope.$broadcast('login', $scope.user);
        });
    }

}

module.exports = AppController;