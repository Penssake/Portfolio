'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();
PORT = process.env.PORT || 5000;

const conString = 'postgres://postgres:postgres@localhost:5433';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.listen(PORT, function () {
  console.log('Your server is now running on port ${PORT}`');
});
