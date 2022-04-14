const logger = require("../lib/logger");
const { getGithubOrgsMember, getDetailMember } = require("../services")

const getMembers = async (req, res, next) => {

  try {
    const members = await getGithubOrgsMember(req.params.orgs)
    const detailedList = await Promise.all(members.map(async (member) => getDetailMember(member.login)))

    const sortedData = detailedList.sort((a, b) => b.followers - a.followers);

    res.json(sortedData)
  } catch (error) {
    logger.error('Error in getMembers', error)
    next(error)
  }
};

module.exports = getMembers
