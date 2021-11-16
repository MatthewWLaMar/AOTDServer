const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
  
})

module.exports = db;