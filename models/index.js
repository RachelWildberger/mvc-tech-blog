// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// User belongsTo Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Post have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

// Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { Comment, Post, User };