'use strict';

require('./app.css');

module.exports = require('angular').module('surveyor-client', [
    'ui.bootstrap',
    require('./nav').name,
    require('./login-modal').name,
    require('./translations').name,
])
.controller('appController', require('./app-controller'))
.factory('appFactory', require('./app-factory'));

