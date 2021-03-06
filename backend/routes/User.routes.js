const express = require('express');

const router = express.Router();

const { UserController } = require('../controllers');

router.post('/users', UserController.createOne);

module.exports = router;
