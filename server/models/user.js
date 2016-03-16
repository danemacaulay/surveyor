'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        // @TODO: add constraint on this!
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
