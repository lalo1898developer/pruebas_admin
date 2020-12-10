const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares');

router.use(require('./User.routes'));
router.use(require('./Auth.routes'));

router.use(verifyToken);
router.use(require('./Service.routes'));
router.use(require('./Module.routes'));
router.use(require('./Role.routes'));

module.exports = router;
