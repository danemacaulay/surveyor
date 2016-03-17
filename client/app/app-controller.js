'use strict';

/* @ngInject */
function AppController($timeout, $scope, $rootScope, $uibModal, $window, appFactory) {

    function init(evt, authedUser) {
        $scope.user = authedUser;
    }

    $scope.user = appFactory.getUser();

    if ($scope.user) {
        $timeout(function () {
            // need time for child controllers to initialize #shameface
            $rootScope.$broadcast('login', $scope.user);
        });
    }

    $rootScope.$on('login', init);

}

module.exports = AppController;