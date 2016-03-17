'use strict';

var path = require('path');
var crypto = require(path.resolve('./server/crypto'));

var Survey = require(path.resolve('./server/models/survey'));

function buildQueryOptions() {

    var queryOptions = {
        limit: 10
    };

    return queryOptions;
}

// @TODO build out query for results
module.exports =  function (req, res) {
    var token = req.cookies.surveyor;

    if (!token) {
        res.status(401).json({});
        return;
    }
    var queryOptions = buildQueryOptions();

    crypto.verify(token).then(function (data) {
        console.log('data', data);
    }).then(function () {
        return Survey.findAll(queryOptions);
    }).then(function (results) {
        res.status(200).json(results);
    }).catch(function (err) {
        console.log(err);
        res.status(400).json({});
    });
};
