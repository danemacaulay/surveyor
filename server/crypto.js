'use strict';

var bcrypt = require('bcrypt');
var promisify = require('promisify-node');

var genSalt = promisify(bcrypt.genSalt);
var hash = promisify(bcrypt.hash);
var compare = promisify(bcrypt.compare);

function Crypto() {
    this.hash = function (data) {
        return genSalt(10).then(function (salt) {
            return hash(data, salt);
        });
    };
    this.compare = function (data, encrypted) {
        return compare(data, encrypted);
    };
}

module.exports = new Crypto();