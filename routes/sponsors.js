
const express = require('express');
const router = express.Router();
const Sponsor = require('../models/Sponsor');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const sponsors = await Sponsor.find();
    res.json(sponsors);
});

router.post('/', auth(['admin']), async (req, res) => {
    const sponsor = new Sponsor(req.body);
    await sponsor.save();
    res.status(201).json(sponsor);
});
module.exports = router;
