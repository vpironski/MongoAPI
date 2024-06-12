const Post = require('../models/post.model');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPosts, createPost };
