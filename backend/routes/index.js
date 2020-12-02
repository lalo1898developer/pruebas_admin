const express = require('express');

const router = express.Router();

router.use(require('./Service.routes'));
router.use(require('./Module.routes'));
router.use(require('./Role.routes'));

module.exports = router;
