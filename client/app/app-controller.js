'use strict';

/* @ngInject */
function AppController($timeout, $scope, $rootScope, $uibModal, $window, appFactory) {

    $scope.user = appFactory.getUser();

}

module.exports = AppController;