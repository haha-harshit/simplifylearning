// requiring express and making and an instance is passed here
const express = require('express');

// router
const router = express.Router();

console.log('router loaded!')

// exporting router to use in index.js
module.exports = router