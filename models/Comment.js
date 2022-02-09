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
        user: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'user'
    }
);

module.exports = User;