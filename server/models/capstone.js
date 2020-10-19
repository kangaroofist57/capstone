const mongoose = require('../mongoose');

const capstone = new mongoose.Schema({
    username: String,
    password: String,
    students: Array,
    todos: Array,
});

module.exports = mongoose.model('credentials', capstone);