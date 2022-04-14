
const { getOrgMember } = require('../../../controllers');
const { getDetailMember, getGithubOrgsMember } = require('../../../services');


jest.mock('../../../services/getGithubOrgsMember');
jest.mock('../../../services/getDetailMember');

describe('controllers.getOrgMember', () => {

  it('should call the service', async () => {
    getGithubOrgsMember.mockImplementationOnce(() => ([{ login: "test", avarat_url: "", followers: 0, following: 0}]));
    getDetailMember.mockImplementationOnce(() => ({ login: "test", avarat_url: "", followers: 0, following: 0}));

    await getOrgMember({ params: { orgs: 'orgs' } }, { json: jest.fn() });

    expect(getGithubOrgsMember).toHaveBeenCalledWith('orgs');
    expect(getDetailMember).toHaveBeenCalled();
  });
});
