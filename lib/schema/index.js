'use strict';

var graffitiMongoose = require('@risingstack/graffiti-mongoose');
var getSchema = graffitiMongoose.getSchema;

var Node = require('../mongo/node');

module.exports = getSchema([
  Node
]);
