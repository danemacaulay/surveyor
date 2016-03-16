'use strict';

var bcrypt = require('bcrypt');
var promisify = require('promisify-node');
var jwt = require('jsonwebtoken');

var fs = require('fs');
var path = require('path');
var cert = fs.readFileSync(path.resolve('./certs/private.pem'));
var pubkey = fs.readFileSync(path.resolve('./certs/cert.pem'));

// promisify crypto calls
var genSalt = promisify(bcrypt.genSalt);
var hash = promisify(bcrypt.hash);
var compare = promisify(bcrypt.compare);
var sign = promisify(jwt.sign);
var verify = promisify(jwt.verify);

function Crypto() {
    this.hash = function (data) {
        return genSalt(10).then(function (salt) {
            return hash(data, salt);
        });
    };
    this.compare = compare;
    this.sign = function (payload) {
        return sign(payload, cert, {algorithm: 'RS256', expiresIn: '600000'})
            // node-promisify doesnt seem to handle this callback correctly
            // catch is called on success... probably should handle promisifiying this by hand
            .catch(function (token) {
                return token;
            });
    };
    this.verify = function (token) {
        return verify(token, pubkey);
    };
}

module.exports = new Crypto();