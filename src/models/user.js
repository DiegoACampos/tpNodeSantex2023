const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequelize-config');

class libUser extends Model {

}

libUser.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: libraryDbInstance,
        modelName: 'User',
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = { libUser };
