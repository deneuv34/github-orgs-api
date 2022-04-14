require('dotenv').config();
const Sequelize = require("sequelize");
const config = require('../config/config');

const sequelize = new Sequelize({
  ...config[process.env.NODE_ENV],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize;
