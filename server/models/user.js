'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        // @TODO: add constraints, only one user now.
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
