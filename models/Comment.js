// module.exports = comment;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// create fields/columns for comment model
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {

            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
       references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'comment'
});

module.exports = Comment;