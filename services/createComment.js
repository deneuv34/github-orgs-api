const getDetailGithubOrgs = require('./getDetailGithubOrgs')
const Comments = require("../models/comments");
const logger = require("../lib/logger");

const createComment = async (orgs, comment) => {

  try {
    // work as validation if orgs is not exist
    const orgsData = await getDetailGithubOrgs(orgs);

    // Save the comment
    return Comments.create({ comment, orgs: orgsData.login })
  } catch (error) {
    logger.error(`error creating comment for organization "${orgs}: ${error.message}"`);
    throw new Error(error.message)
  }
}

module.exports = createComment;
