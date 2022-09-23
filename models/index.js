const User = require('./User');
const Post = require('./Post')
const Comment = require('./Comment');

// Create associations.
User.hasMany(Post, {
    foreignKey: 'user_id',
    });

Post.belongsTo(User, {
    foreignKey: 'user_id',
    });

//Adding Comment Api
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post,{
    foreignKey:'Post_id'
});

User.hasMany(Comment,{
    foreignKey:'user_id'
});

Post.hasMany(Comment,{
    foreignKey:'Post_id'
})

module.exports = { User, Post, Comment};
