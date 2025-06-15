const express = require('express');
const router = express.Router();

// @route   GET /api/about
// @desc    Get about us information (placeholder)
// @access  Public
router.get('/', (req, res) => {
  res.json({
    title: 'About Ashwa Racing (from backend)',
    content: 'We are a team of passionate engineering students from RVCE, Bangalore, dedicated to designing, building, and racing formula-style cars. Our journey is fueled by innovation, teamwork, and a relentless pursuit of excellence on and off the track.'
  });
});

module.exports = router;
