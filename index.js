'use strict';

console.log('Loading function');
const Logger = require('logger');
let lib = require('./lib/responseManager.customer.js');

exports.handler = function (event, context, callback) {
    Logger.log(Logger.levels.INFO, 'Customer-cloud service recieved event:');
    Logger.log(Logger.levels.INFO, event);

    lib.respond(event).then((data) => {
        return callback(null, data);
    }).catch(err => {
        return callback(err, null);
    });

};