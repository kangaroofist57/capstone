const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const uri = process.env.URI

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;