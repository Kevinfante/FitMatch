const express = require('express');
const axios = require('axios');
const auth = require('../config');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));