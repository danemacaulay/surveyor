'use strict';

require('./app.css');

module.exports = require('angular').module('surveyor-client', [
    'ui.bootstrap',
    require('./nav').name,
    require('./login-modal').name,
    require('./survey-entry').name,
    require('./translations').name,
])
.config(require('./app-config'))
.controller('appController', require('./app-controller'))
.factory('appFactory', require('./app-factory'));

