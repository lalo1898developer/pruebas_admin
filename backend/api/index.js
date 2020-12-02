const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));
api.use('/api/test', require('../routes'));

api.get('/', (req, res) => res.send('Hello World!'));

module.exports = { api, PORT };
