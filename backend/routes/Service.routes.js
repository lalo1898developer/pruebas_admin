const express = require('express');

const router = express.Router();

const { SystemController } = require('../controllers');
//const { SystemValidator } = require('../validators');

router.get('/systems/', SystemController.readAll);
router.post('/systems', SystemController.createOne);
router.get('/systems/:id_system', SystemController.readOne);
router.put('/systems/:id_system', SystemController.updateOne);

module.exports = router;
