const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dashSchema = new Schema({
  goalName: { type: String, required: true },
  numCompleted: { type: String },
  numRemaining: { type: String },
  avgCompletion: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('DashBoard', dashSchema);