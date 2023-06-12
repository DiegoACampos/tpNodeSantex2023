const { Model, DataTypes } = require('sequelize');
const { libraryDbInstance } = require('../db/sequelize-config');

class Libraries extends Model { }

Libraries.init(
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
    modelName: 'Libraries',
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = { Libraries };
  
