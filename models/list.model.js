let mongoose = require('mongoose');

// Create a model class
let listModel = mongoose.Schema(
    {
        Email: String,
        Name: String,
        Number: String
    },
    {
        collection:"contacts"
    }
);

module.exports = mongoose.model('List', listModel);