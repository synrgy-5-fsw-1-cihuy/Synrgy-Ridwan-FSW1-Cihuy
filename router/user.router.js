const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller.js');

router.post('/api/auth/register', userController.doRegisterUserHandler);
router.post('/api/auth/login', userController.doLoginHandler);
router.get('/api/auth/profile', userController.doGetProfileHandler);


module.exports = router;