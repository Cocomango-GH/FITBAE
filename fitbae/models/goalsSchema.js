const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: String },
  startedAt: { type: Date },
  expectedCompletionDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalsSchema);


