const mongoose = require('mongoose');

// // Ensure that the Category model is loaded in Mongoose
require('./goals');

// We want to re-use the goalSchema
const goalsSchema = require('../goalsSchema');

module.exports = mongoose.model('Goal', goalsSchema);

