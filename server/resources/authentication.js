'use strict';

var crypto = require('../crypto');
var User = require('../models/user');
var Promise = require('promise');

module.exports =  function (req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({
        where: {
            username: username
        }
    }).then(function (result) {
        return crypto.compare(password, result.password);
    }).then(function (isCorrectPassword) {
        if (isCorrectPassword) {
            res.status(200).json({});
        }
        else {
            return Promise.reject();
        }
    }).catch(function (error) {
        console.log('error', error);
        res.status(401).json({});
    });

};
