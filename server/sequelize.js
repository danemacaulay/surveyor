'use strict';

var Sequelize = require('Sequelize');
var mysqlUserPassword = process.env.SURVEYOR_MYSQL_ADMIN_PASSWORD;
var mysqlIP = process.env.MYSQL_IP;

// @TODO: use an app user instead of root
module.exports = new Sequelize('surveyor', 'root', mysqlUserPassword, {
    host: mysqlIP,
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
