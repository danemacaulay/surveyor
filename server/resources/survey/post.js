'use strict';

var path = require('path');
var Survey = require(path.resolve('./server/models/survey'));
var crypto = require(path.resolve('./server/crypto'));

module.exports =  function (req, res) {
    var token = req.cookies.surveyor;

    if (!token) {
        res.status(401).json({});
        return;
    }

    var title = req.body.title;
    var body = req.body.body;
    var options = req.body.options;

    crypto.verify(token).then(function (data) {
        console.log('data', data);
    }).then(function () {
        return Survey.create({
            title: title,
            body: body,
            options: options
        });
    }).then(function (results) {
        console.log(results);
        res.status(201).json({});
    }).catch(function (error) {
        console.log(error);
        res.status(400).json({});
    });
};
