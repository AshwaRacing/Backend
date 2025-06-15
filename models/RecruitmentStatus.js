const mongoose = require('mongoose');

const recruitmentStatusSchema = new mongoose.Schema({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  message: {
    type: String,
    default: 'Recruitment is currently closed.',
  },
  // We can add more fields like openPositions later
}, { timestamps: true });

// Ensure there is only one document in this collection (singleton pattern)
recruitmentStatusSchema.statics.getSingleton = async function () {
  let status = await this.findOne();
  if (!status) {
    status = await this.create({});
  }
  return status;
};

const RecruitmentStatus = mongoose.model('RecruitmentStatus', recruitmentStatusSchema);

module.exports = RecruitmentStatus;
