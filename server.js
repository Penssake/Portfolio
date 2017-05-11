'use strict';

const express = require('express');
const fs = require('fs');
const pg = require('pg');
const bodyParser = require('body-parser');
PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static('./public'));
// const conString = 'postgres://postgres:postgres@localhost:5433';

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: './public'});
});
app.get('/about', (request, response) => {
  response.sendFile('index.html', { root: './public'});
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('.'));

app.listen(PORT, function () {
  console.log(`Your server is now running on port ${PORT}`);
});
