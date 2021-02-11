// requiring express and making and an instance is passed here
const express = require('express');

// router
const router = express.Router();

const userController = require('../controllers/users_controllers');

// profile
router.get('/profile', userController.profile);

// dashboard
router.get('/dashboard', userController.dashboard);


module.exports = router;