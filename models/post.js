const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    isPublic: {type: Boolean, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);