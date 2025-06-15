
const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/ContactSubmission');

router.post('/', async (req, res) => {
    const submission = new ContactSubmission(req.body);
    await submission.save();
    res.status(201).json({ message: 'Submission received' });
});
module.exports = router;
