const express = require('express');
const router = express.Router();
const RecruitmentStatus = require('../models/RecruitmentStatus');
const { protect, admin } = require('../middleware/authMiddleware');

// @route   GET /api/recruitment-status
// @desc    Get the current recruitment status from the database
// @access  Public
router.get('/', async (req, res) => {
  try {
    const status = await RecruitmentStatus.getSingleton();
    res.json(status);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   PUT /api/recruitment-status
// @desc    Toggle the recruitment status (Admin only)
// @access  Private/Admin
router.put('/', protect, admin, async (req, res) => {
  try {
    const status = await RecruitmentStatus.getSingleton();
    status.isOpen = !status.isOpen;
    status.message = status.isOpen ? 'Recruitment is now OPEN!' : 'Recruitment is currently CLOSED.';
    
    const updatedStatus = await status.save();
    res.json(updatedStatus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
