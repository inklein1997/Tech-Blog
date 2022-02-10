const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'id',
            }
        },
        content: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Comment'
    }
);

module.exports = Comment;