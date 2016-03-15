'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('user', {
        user: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });
};
