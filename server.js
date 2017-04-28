'use strict';

const fs = require('fs');
const express = require('express');
const pg = require('pg');
const app = express();

 bodyParser = require('body-parser');
PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.listen(PORT, function () {
console.log(`Your server is now running on port ${PORT}`);
});
