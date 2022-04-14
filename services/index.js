const getGithubOrgsMember = require('./getGithubOrgsMember');
const getDetailGithubOrgs = require('./getDetailGithubOrgs');
const getDetailMember = require('./getDetailMember');
const getCommentsByOrgs = require('./getCommentsByOrgs');
const deleteCommentByOrg = require('./deleteCommentByOrg');
const createComment = require('./createComment');

module.exports = {
  getGithubOrgsMember,
  getDetailGithubOrgs,
  getDetailMember,
  getCommentsByOrgs,
  deleteCommentByOrg,
  createComment
}
