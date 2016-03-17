'use strict';

var path = require('path');
var Response = require(path.resolve('./server/models/response'));

module.exports =  function (req, res) {
    var surveyId = req.body.surveyId;
    var response = req.body.response;

    Response.create({
        response: response,
        surveyId: surveyId,
    }).then(function (results) {
        console.log(results);
        res.status(201).json({});
    }).catch(function (error) {
        console.log(error);
        res.status(400).json({});
    });
};
