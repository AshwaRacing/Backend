
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../utils/upload');

router.post('/', auth(['admin']), upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'File upload failed' });
    res.status(200).json({ filePath: '/uploads/' + req.file.filename });
});

module.exports = router;
