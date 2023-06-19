const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

router.post('/createUser',userController.createUser);
router.get('/login',userController.getUserById)

module.exports = router;
