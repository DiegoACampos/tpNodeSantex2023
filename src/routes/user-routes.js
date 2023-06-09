const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/create-admin', userController.createLogin);

module.exports = router;

// const express = require('express');
// const UserController = require('../controllers/user-controller');

// const router = express.Router();

// router.get('/create-admin', UserController.createLogin);

// module.exports = router;
