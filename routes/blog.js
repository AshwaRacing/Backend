
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const posts = await Blog.find();
    res.json(posts);
});

router.post('/', auth(['admin']), async (req, res) => {
    const post = new Blog(req.body);
    await post.save();
    res.status(201).json(post);
});
module.exports = router;
