const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, userId: req.user.id });
  res.status(201).json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.findAll({ include: ['User'] });
  res.json(posts);
});

router.put('/:id', auth, async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.userId !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });

  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.json(post);
});

router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post.userId !== req.user.id) return res.status(403).json({ error: 'Unauthorized' });

  await post.destroy();
  res.json({ message: 'Post deleted' });
});

module.exports = router;
