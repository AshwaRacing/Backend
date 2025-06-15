
const mongoose = require('mongoose');
const galleryItemSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    category: String,
    uploadedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('GalleryItem', galleryItemSchema);
