const { Model, DataTypes } = require('sequelize');
const { DbInstance } = require('../db/sequelize-config');

class User extends Model { };

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: DbInstance,
    modelName: 'User',
    tableName: 'UserM',
    createdAt: false,
    updatedAt: false
})

module.exports = { User }
