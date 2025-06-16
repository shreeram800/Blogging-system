const express = require('express');
const router = express.Router({ mergeParams: true });
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

router.post('/', auth, async (req, res) => {
  const comment = await Comment.create({
    content: req.body.content,
    userId: req.user.id,
    postId: req.params.postId,
  });
  res.status(201).json(comment);
});

router.get('/', async (req, res) => {
  const comments = await Comment.findAll({ where: { postId: req.params.postId } });
  res.json(comments);
});

module.exports = router;
// This code defines routes for handling comments on posts in an Express application.
// It allows authenticated users to create new comments and retrieve all comments for a specific post.