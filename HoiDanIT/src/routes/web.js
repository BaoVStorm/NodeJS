const express = require('express');
const router = express.Router();

// controller
const { getHomepage, getSample, getABC } = require('../controllers/homeController');

router.get("/", getHomepage);
router.get("/sample", getSample);
router.get("/abc", getABC);

module.exports = router;
