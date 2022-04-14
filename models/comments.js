'use strict';
const {
  Model,
  STRING,
} = require('sequelize');
const sequelize = require('../database/connectors');

class Comments extends Model {}

Comments.init({
  comment: STRING,
  orgs: STRING
}, {
  sequelize,
  modelName: 'Comments',
  paranoid: true,
});

module.exports = Comments;
