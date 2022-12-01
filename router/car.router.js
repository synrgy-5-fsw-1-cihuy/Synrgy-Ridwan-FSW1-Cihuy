const express = require('express');
const router = express.Router();
const carController = require('../controller/car.controller.js');
const authMiddleware = require('../middleware/auth_token.js');

// router.use(authMiddleware);

// POST CAR
router.post('/api/cars', authMiddleware, carController.createCarHandler);

// GET ALL
router.get('/api/cars', authMiddleware, carController.getAllCarHandler);

// GET BY ID
router.get('/api/cars/:id', authMiddleware, carController.getCarByIdHandler);

// UPDATE
// DELETE


module.exports = router;