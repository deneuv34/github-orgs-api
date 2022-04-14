const { default: axios } = require("axios");
const { GITHUB_TOKEN, GITHUB_API_URL } = require("../lib/config");

const getDetailGithubOrgs = async (orgName) => {

  const { data } = await axios.get(`${GITHUB_API_URL}/orgs/${orgName}`, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    }
  });
  return data;
};

module.exports = getDetailGithubOrgs;
