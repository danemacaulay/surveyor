'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        // @TODO: add constraints
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
