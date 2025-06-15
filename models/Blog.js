
const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});
module.exports = mongoose.model('Blog', blogSchema);
