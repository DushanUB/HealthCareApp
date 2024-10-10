const express = require('express');
const { registerDoctor } = require('../controllers/doctorController');

const router = express.Router();

// POST route for doctor registration
router.post('/register', registerDoctor);

module.exports = router;
