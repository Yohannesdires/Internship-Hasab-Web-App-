const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        // required: true,
    },
});
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment