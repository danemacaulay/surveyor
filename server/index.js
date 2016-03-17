'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(express.static('./client'));

app.use('/services', cookieParser());
app.use('/services', bodyParser.json());

app.post('/services/authentication', require('./resources/authentication'));

app.get('/services/survey', require('./resources/survey/get.js'));
app.post('/services/survey', require('./resources/survey/post.js'));

app.post('/services/response', require('./resources/response.js'));

app.get('/services/results', require('./resources/results.js'));

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Surveyor app listening at http://localhost:%s', port);
});
