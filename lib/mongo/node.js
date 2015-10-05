'use strict';

var mongoose = require('mongoose');

var NodeSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  tags: [String]
});

var Node = mongoose.model('Node', NodeSchema);

module.exports = Node;
