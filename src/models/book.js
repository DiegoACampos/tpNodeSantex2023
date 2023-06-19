const { Model, DataTypes } = require('sequelize');
const { DbInstance } = require('../db/sequelize-config');
const {LibraryM} = require('./librarys')


class Book extends Model { };

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull:false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull:false
    },
    year: {
        type: DataTypes.STRING,
        allowNull:false
     },
     libraryId:{
        type:DataTypes.INTEGER,       
     },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
            isIn: [['true', 'false']]
        },
        set(value) {
            if (value === true) {
                this.setDataValue('deleted', 'true');
            } else if (value === false) {
                this.setDataValue('deleted', 'false');
            }
        }

    },

}, {
    sequelize: DbInstance,
    modelName: 'Book',
    tableName: 'BookMs',
    createdAt: false,
    updatedAt: false,
    onDelete:'CASCADE',
})

LibraryM.hasMany(Book, { foreignKey: 'libraryId' });

module.exports = {Book};
