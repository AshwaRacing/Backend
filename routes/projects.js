const express = require('express');
const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects (placeholder)
// @access  Public
router.get('/', (req, res) => {
  res.json([
    { id: '1', name: 'Project Alpha (from backend)', description: 'This is project Alpha.' },
    { id: '2', name: 'Project Beta (from backend)', description: 'This is project Beta.' },
    { id: '3', name: 'Project Gamma (from backend)', description: 'This is project Gamma.' }
  ]);
});

module.exports = router;
