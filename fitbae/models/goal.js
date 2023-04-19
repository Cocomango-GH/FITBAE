const mongoose = require('mongoose');

// // Ensure that the Category model is loaded in Mongoose
// require('./category');

// We want to re-use the goalSchema
const goalSchema = require('../goalSchema');

module.exports = mongoose.model('Goal', goalSchema);