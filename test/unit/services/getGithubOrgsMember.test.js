
const { default: axios } = require('axios');
const { getDetailMember, getGithubOrgsMember } = require('../../../services');

jest.mock('axios');

describe('services.getGithubOrgsMember', () => {

  it('should call get axios service', async () => {
    axios.get.mockImplementation(() => ({ 
      data: [{
        id: 123,
        login: 'test',
        avatar_url: 'test',
        followers: 2,
        following: 3,
      }],
    }))

    const data = await getGithubOrgsMember('testorg');

    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual([{
      id: 123,
      login: 'test',
      avatar_url: 'test',
      followers: 2,
      following: 3,
    }]);
  });
});
