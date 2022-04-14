
const { default: axios } = require('axios');
const { getDetailGithubOrgs } = require('../../../services');

jest.mock('axios');

describe('services.getDetailGithubOrgs', () => {

  it('should call API service', async () => {
    axios.get.mockImplementation(() => ({ data: { login: 'test' } }))

    const data = await getDetailGithubOrgs('testorg');

    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual({ login: 'test' });
  });
});
