let mongoose = require('mongoose');

// Create a model class
let listModel = mongoose.Schema(
    {
        email: String,
        name: String,
        phone: String
    },
    {
        collection:"contacts"
    }
);

module.exports = mongoose.model('List', listModel);