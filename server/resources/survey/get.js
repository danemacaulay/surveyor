'use strict';

var url = require('url');
var path = require('path');
var lodash = require('lodash');

var sequelize = require(path.resolve('./server/sequelize'));
var Survey = require(path.resolve('./server/models/survey'));

function buildQueryOptions(excludes) {
    var queryOptions = {
        order: sequelize.fn('RAND'),
        limit: 1
    };

    if (excludes.length) {
        queryOptions.where = {
            id: {
                $notIn: excludes
            }
        };
    }
    return queryOptions;
}

module.exports =  function (req, res) {
    var urlParts = url.parse(req.url, true);
    var query = urlParts.query;
    var excludes = query.surveysToExclude || [];
    var queryOptions = buildQueryOptions(excludes);

    Survey.findAll(queryOptions).then(function (results) {
        var survey = lodash.get(results, '[0].dataValues');
        res.status(200).json(survey);
    }).catch(function (err) {
        console.log(err);
        res.status(400).json({});
    });
};
