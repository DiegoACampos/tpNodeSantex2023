const { Model, DataTypes } = require('sequelize');
const { DbInstance } = require('../db/sequelize-config');

class LibraryM extends Model { }

LibraryM.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: DbInstance,
    modelName: 'LibraryM',
    tableName: 'libraryMs',
    createdAt: false,
    updatedAt: false
})

module.exports = { LibraryM };
