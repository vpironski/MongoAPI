const Comment = require('../models/comment.model');

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate('author').populate('post');
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getComments, createComment };
