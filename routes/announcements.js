const express = require('express');
const router = express.Router();

// @route   GET /api/announcements
// @desc    Get all announcements (placeholder)
// @access  Public
router.get('/', (req, res) => {
  res.json([
    { id: 'a1', title: 'Team Meeting Next Week (from backend)', content: 'Discussing new design strategies.' },
    { id: 'a2', title: 'Workshop on Saturday (from backend)', content: 'Focus on aerodynamics.' }
  ]);
});

module.exports = router;
