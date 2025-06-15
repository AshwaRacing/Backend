
const express = require('express');
const router = express.Router();
const GalleryItem = require('../models/GalleryItem');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const items = await GalleryItem.find();
    res.json(items);
});

router.post('/', auth(['admin']), async (req, res) => {
    const item = new GalleryItem(req.body);
    await item.save();
    res.status(201).json(item);
});
module.exports = router;
