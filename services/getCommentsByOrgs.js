const Comments = require("../models/comments");

const getCommensByOrgs = async (orgs) => {
  
  return Comments.findAll({ where: {orgs}, raw: true })
}

module.exports = getCommensByOrgs;
