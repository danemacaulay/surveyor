'use strict';

var path = require('path');
var lodash = require('lodash');

var sequelize = require(path.resolve('./server/sequelize'));
var Survey = require(path.resolve('./server/models/survey'));

function buildQueryOptions() {

    var queryOptions = {
        limit: 10
    };

    return queryOptions;
}

module.exports =  function (req, res) {
    var queryOptions = buildQueryOptions();

    Survey.findAll(queryOptions).then(function (results) {
        var survey = lodash.get(results, '[0].dataValues');
        res.status(200).json(survey);
    }).catch(function (err) {
        console.log(err);
        res.status(400).json({});
    });
};
