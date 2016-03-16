'use strict';

var sequelize = require(require('path').resolve('./server/sequelize'));

module.exports =  function (req, res) {
    res.status(200).json({});
};
