const { default: axios } = require("axios");
const { GITHUB_API_URL, GITHUB_TOKEN } = require("../lib/config");
const logger = require("../lib/logger");

const getGithubOrgsMember = async (login) => {

  const { data } = await axios.get(GITHUB_API_URL + `/users/${login}`, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    }
  });
  
  return {
    id: data.id,
    login: data.login,
    avatar_url: data.avatar_url,
    followers: data.followers,
    following: data.following,
  };
};

module.exports = getGithubOrgsMember;
