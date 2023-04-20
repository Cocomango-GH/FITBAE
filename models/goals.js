

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  goalName: { type: String, required: true },
  frequency: { type: String },
  startDate: { type: String },
  endDate: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalsSchema);