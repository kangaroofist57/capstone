const mongoose = require('../mongoose');

const capstone = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId(),
    username: String,
    password: String
});

module.exports = mongoose.model('credentials', capstone);