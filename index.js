'use strict';

var express = require('express');
var graphqlHTTP = require('express-graphql');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graphql');

var Schema = require('./lib/schema');

var app = express();

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }));

var server = app.listen(process.env.PORT || 8888);

process.on('SIGINT', function () {
  mongoose.disconnect();
  server.close();
});
