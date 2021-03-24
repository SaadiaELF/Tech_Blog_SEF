const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'author_id',
});

module.exports = { User, Post };
