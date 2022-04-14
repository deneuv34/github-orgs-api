
const { default: axios } = require('axios');
const { getDetailMember } = require('../../../services');

jest.mock('axios');

describe('services.getDetailMember', () => {

  it('should call get API service', async () => {
    axios.get.mockImplementation(() => ({ 
      data: {
        id: 123,
        login: 'test',
        avatar_url: 'test',
        followers: 2,
        following: 3,
      },
    }))

    const data = await getDetailMember('testorg');

    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual({
      id: 123,
      login: 'test',
      avatar_url: 'test',
      followers: 2,
      following: 3,
    });
  });
});
