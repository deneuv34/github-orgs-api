const logger = require("../lib/logger");
const { createComment } = require("../services");

const createOrgComment = async (req, res, next) => {

  try {
    const { orgs } = req.params;
    const { comment } = req.body;
  
    if (!comment) return res.status(400).json({ error: "comment is required" });
    await createComment(orgs, comment);
  
    res.status(201).json({
      message: 'Comment created successfully',
    })
    
  } catch (error) {
    logger.error('Error in createOrgComment: '+error.message, error)
    next(error)
  }
};

module.exports = createOrgComment;
