const express = require('express');

const router = express.Router();

const {
    ModuleController
} = require('../controllers');
//const { SystemValidator } = require('../validators');

router.get('/systems/:id_system/modules/:id_module?', ModuleController.readAll);
router.post('/systems/:id_system/modules', ModuleController.createOne);
router.get('/systems/:id_system/modules/:id_module', ModuleController.readOne);
router.put('/systems/:id_system/modules/:id_module', ModuleController.updateOne);

module.exports = router;