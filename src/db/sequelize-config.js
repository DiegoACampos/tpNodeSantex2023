const { Sequelize } = require('sequelize');

const libraryDbInstance = new Sequelize({
  host: 'localhost',
  database: 'librariyUser',
  username: 'root',
  password: 'pocho1988',
  dialect: 'mysql',
  port: 3306,
});

const bookDbInstance = new Sequelize( {
  host: 'localhost',
  database: 'librariyUser',
  username: 'root',
  password: 'pocho1988',
  dialect: 'mysql',
  port: 3306,
});

const userDbInstance = new Sequelize({
  host: 'localhost',
  database: 'librariyUser',
  username:'root',
  password: 'pocho1988',
  dialect: 'mysql',
  port: 3306
})

module.exports = { libraryDbInstance, bookDbInstance, userDbInstance };
