'use strict';

/* @ngInject */
function AppFactory($window, $rootScope) {

    function getUser() {
        var user;
        var userData = $window.sessionStorage.getItem('bsr-auth');
        if (userData) {
            user = JSON.parse(userData);
        }
        return user;
    }

    function setUser(user) {
        $rootScope.$broadcast('login', user);
        $window.sessionStorage.setItem('bsr-auth', JSON.stringify(user));
    }

    return {
        getUser: getUser,
        setUser: setUser
    };

}

module.exports = AppFactory;