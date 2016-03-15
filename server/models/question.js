'use strict';

var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('survey_question', {
        title: {
            type: Sequelize.STRING,
        },
        body: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });
};
