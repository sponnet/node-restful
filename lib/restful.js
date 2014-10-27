var model = require('./model'),
    handlers = require('./handlers'),
 //   mongoose = require('mongoose');

exports = module.exports = handlers;
exports.model = model.model;
exports.setMongoose = model.setMongoose;
//exports.mongoose = mongoose;
