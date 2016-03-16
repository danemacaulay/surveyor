'use strict';

var adminUserPassword = process.env.SURVEYOR_ADMIN_USER_PASSWORD;

var crypto = require('../server/crypto');
var Promise = require('promise');

var path = require('path');
var User = require(path.resolve('./server/models/user'));
var Survey = require(path.resolve('./server/models/survey'));

function initializeDB(adminUserPassword) {

    var p1 = User.sync({force: true}).then(function () {
        return crypto.hash(adminUserPassword);
    }).then(function (hashedResult) {
        return User.create({
            username: 'admin@admin.com',
            password: hashedResult
        });
    });

    var p2 = Survey.sync({force: true});

    Promise.all([p1, p2]).finally(function () {
        process.exit();
    });

}

initializeDB(adminUserPassword);