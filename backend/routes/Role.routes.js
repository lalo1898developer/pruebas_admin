const express = require('express');

const router = express.Router();

const { RoleController } = require('../controllers');
//const { SystemValidator } = require('../validators');

router.get('/roles?', RoleController.readAll);
router.post('/roles', RoleController.createOne);
router.get('/roles/:id_role', RoleController.readOne);
router.put('/roles/:id_role', RoleController.updateOne);

module.exports = router;
