const Comments = require("../models/comments");
const logger = require("../lib/logger");
const getDetailGithubOrgs = require("./getDetailGithubOrgs");

const deleteCommentByOrg = async (orgs) => {

  try {
    const orgData = await getDetailGithubOrgs(orgs);

    return Comments.destroy({
      where: {
        orgs: orgData.login
      }
    })
  } catch (error) {
    logger.error(`couldn't remove the comments for orgs ${orgs}: ${error.message}`)
    throw new Error(error.message)
  }
}

module.exports = deleteCommentByOrg;
