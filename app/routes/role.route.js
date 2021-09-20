const express = require('express');
const router =express.Router();
const roleController= require('../controllers/role.controller');

router.get('/', roleController.getAllRole);

router.get('/:id', roleController.getSingleRole);

module.exports = router ;