'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = sequelize.define('response', {
    response: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true
});
