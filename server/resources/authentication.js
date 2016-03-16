'use strict';

var path = require('path');
var User = require(path.resolve('./server/models/user'));
var crypto = require(path.resolve('./server/crypto'));

module.exports =  function (req, res) {
    console.log('auth endpoint');
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({
        where: {
            username: username
        }
    }).then(function (result) {
        return crypto.compare(password, result.password);
    }).then(function (isCorrectPassword) {
        return isCorrectPassword ? true : Promise.reject();
    }).then(function () {
        return crypto.sign({username: username});
    }).then(function (jwtToken) {
        // @TODO set cookie domain
        res.cookie('surveyor', jwtToken, { maxAge: 600000, httpOnly: true });
        res.status(200).json({username: username});
    }).catch(function () {
        res.status(401).json({});
    });

};
