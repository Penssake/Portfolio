'use strict';

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();
PORT = process.env.PORT || 5000;

var conString = 'postgres://postgres:postgres@localhost:5433';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.listen(PORT, function () {
  console.log('Your server is now running on port ${PORT}`');
});
