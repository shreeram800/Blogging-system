const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Post = require('./Post');
const User = require('./User');

const Comment = sequelize.define('Comment', {
  content: DataTypes.TEXT,
});

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });
User.hasMany(Comment, { foreignKey: 'userId' });
Post.hasMany(Comment, { foreignKey: 'postId' });

module.exports = Comment;
// This code defines a Comment model using Sequelize, which includes a content field and establishes relationships with User and Post models.
// The Comment model belongs to both User and Post, and both User and Post can have many Comments.