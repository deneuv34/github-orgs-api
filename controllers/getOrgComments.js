const { getCommentsByOrgs } = require("../services")

const getOrgComments = async (req, res, next) => {
  try {
    const comments = await getCommentsByOrgs(req.params.orgs);

    res.json(comments);
  } catch (error) {
    next(error)
  }
}

module.exports = getOrgComments;
