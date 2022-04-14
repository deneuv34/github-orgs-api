require('dotenv').config();
const Sequelize = require("sequelize");
const {
  DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT
} = require('../lib/config')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

module.exports = sequelize;
