
const mongoose = require('mongoose');
const sponsorSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    tier: { type: String, enum: ['title', 'gold', 'silver', 'bronze'] },
    website: String
});
module.exports = mongoose.model('Sponsor', sponsorSchema);
