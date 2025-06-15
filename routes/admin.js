const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const TeamMember = require('../models/TeamMember');
const Blog = require('../models/Blog');
const Sponsor = require('../models/Sponsor');
const GalleryItem = require('../models/GalleryItem');
const ContactSubmission = require('../models/ContactSubmission');

router.get('/dashboard', auth(['admin']), async (req, res) => {
    const stats = await Promise.all([
        User.countDocuments(),
        TeamMember.countDocuments(),
        Blog.countDocuments(),
        Sponsor.countDocuments(),
        GalleryItem.countDocuments(),
        ContactSubmission.countDocuments()
    ]);
    res.json({
        users: stats[0],
        team: stats[1],
        blogs: stats[2],
        sponsors: stats[3],
        gallery: stats[4],
        contacts: stats[5]
    });
});

module.exports = router;
