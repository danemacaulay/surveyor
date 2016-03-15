'use strict';

var Sequelize = require('Sequelize');

var sequelize = new Sequelize('surveyor_db', 'root', 'surveyor1', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var User = require('./models/user')(sequelize);
var SurveyQuestion = require('./models/survey-question')(sequelize);

User.sync({force: true}).then(function () {
    return User.create({
        user: 'admin',
        password: 'kung-fu-fighting'
    });
});

User.sync({force: true}).then(function () {
    return User.create({
        user: 'guest',
        password: ''
    });
});

SurveyQuestion.sync({force: true}).then(function () {
    return SurveyQuestion.create({
        title: 'How is this question?',
        body: 'Explanatory text here'
    });
});
