const express = require('express');
const router = express.Router();
const userDetailController = require('../controllers/userdetail.controller');

router.get('/', userDetailController.getAllUserDetail);
router.get('/:id', userDetailController.getSingleUserDetail);
router.post('/', userDetailController.createUserDetail);
router.put('/', userDetailController.updateUserDetail);



module.exports = router;