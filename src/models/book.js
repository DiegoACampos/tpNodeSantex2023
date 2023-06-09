const { Model, DataTypes } = require('sequelize');
const { bookDbInstance } = require('../db/sequelize-config');

class liveBooks extends Model { 
  
}

liveBooks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.INTEGER,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    autor: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    libraryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Library',
        key: 'id',
      },
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: bookDbInstance,
    modelName: 'liveBooks',
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = { liveBooks };

const { Library } = require('./librarys')


Library.hasMany(liveBooks, {
  foreignKey: 'libraryId',
  onDelete: 'CASCADE',
});
liveBooks.belongsTo(Library, { foreignKey: 'libraryId' });

