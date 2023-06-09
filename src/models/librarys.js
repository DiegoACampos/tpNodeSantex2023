const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequelize-config');

class Library extends Model { }

Library.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: libraryDbInstance,
    modelName: 'Library',
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = { Library };

