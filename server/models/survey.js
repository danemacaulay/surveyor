'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../sequelize');
var Response = require('./response');

var Survey = sequelize.define('survey', {
    title: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.STRING
    },
    options: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});

Survey.hasMany(Response);
Response.belongsTo(Survey);

module.exports = Survey;