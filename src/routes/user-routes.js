const express = require('express');
const userController = require('../controllers/user-controller');
const router = express.Router();

router.post('/createUser',userController.createUser);
router.get('/login',userController.getUserById)

module.exports = router;
