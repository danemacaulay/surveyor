'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = sequelize.define('survey', {
    title: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
