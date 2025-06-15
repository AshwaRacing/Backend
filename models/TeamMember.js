
const mongoose = require('mongoose');
const teamMemberSchema = new mongoose.Schema({
    name: String,
    role: String,
    imageUrl: String,
    bio: String,
    linkedin: String,
    year: Number
});
module.exports = mongoose.model('TeamMember', teamMemberSchema);
