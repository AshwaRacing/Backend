
const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const members = await TeamMember.find();
    res.json(members);
});

router.post('/', auth(['admin']), async (req, res) => {
    const member = new TeamMember(req.body);
    await member.save();
    res.status(201).json(member);
});

router.put('/:id', auth(['admin']), async (req, res) => {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(member);
});

router.delete('/:id', auth(['admin']), async (req, res) => {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
