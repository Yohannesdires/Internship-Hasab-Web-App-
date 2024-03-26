const Comment = require('../models/comment');
const Post = require('../models/ventModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const createComment = asyncHandler(async (req, res) => {
    const { comment } = req.body;
    // const user = req.user;
    // const post = await Post.findById(postId);
    // if (!post) {
    //     res.status(404);
    //     throw new Error('Post not found');
    // }
    const newComment = await Comment.create({
        // user: user._id,
        // post: postId,
        comment
    });
    if (newComment) {
        res.status(201).json(newComment);
    }
});

module.exports = {
    createComment
}