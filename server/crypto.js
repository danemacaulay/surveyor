'use strict';

var promisify = require('promisify-node');
var bcrypt = promisify('bcrypt');
var jwt = promisify('jsonwebtoken');

var fs = require('fs');
var path = require('path');
var privateKey = fs.readFileSync(path.resolve('./certs/private.pem'));
var publicKey = fs.readFileSync(path.resolve('./certs/public.pem'));

function Crypto() {
    this.hash = function (data) {
        return bcrypt.genSalt(10).then(function (salt) {
            return bcrypt.hash(data, salt);
        });
    };
    this.compare = bcrypt.compare;
    this.sign = function (payload) {
        return jwt.sign(payload, privateKey, {algorithm: 'RS256', expiresIn: '600000'})
            // node-promisify doesnt seem to handle this callback correctly
            // catch is called on success... @TODO promisifiy this by hand
            .catch(function (token) {
                return token;
            });
    };
    this.verify = function (token) {
        return jwt.verify(token, publicKey);
    };
}

module.exports = new Crypto();