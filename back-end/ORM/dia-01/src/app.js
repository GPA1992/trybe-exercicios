// src/app.js

const express = require('express');
const { booksRouter } = require('./router');

const app = express();

app.use(express.json());

app.use('/books', booksRouter);
module.exports = app;