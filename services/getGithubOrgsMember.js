const { default: axios } = require("axios");
const { GITHUB_API_URL, GITHUB_TOKEN } = require("../lib/config");

const getGithubOrgsMember = async (orgName) => {

  const { data } = await axios.get(GITHUB_API_URL + `/orgs/${orgName}/members`, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    }
  });
  
  return data;
};

module.exports = getGithubOrgsMember;
