const { Sequelize } = require('sequelize');

const DbInstance = new Sequelize({
    host:'localhost',
    database:'Library',
    username:'root',
    password:'pocho1988',
    port:3306,
    dialect:'mysql'
})

module.exports = {DbInstance}
