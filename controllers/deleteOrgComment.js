const { deleteCommentByOrg } = require("../services");

const deleteOrgComment = async (req, res, next) => {

  try {    
    const { orgs } = req.params;

    await deleteCommentByOrg(orgs);

    res.json({
      message: 'Comment deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = deleteOrgComment;
