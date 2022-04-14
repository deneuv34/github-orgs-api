
const { getOrgComments } = require('../../../controllers');
const { getCommentsByOrgs } = require('../../../services');


jest.mock('../../../services/getCommentsByOrgs');

describe('controllers.getOrgComments', () => {

  it('should call get member service', async () => {
    getCommentsByOrgs.mockImplementationOnce(() => ({}));

    await getOrgComments({ params: { orgs: 'orgs' } }, { json: jest.fn() });

    expect(getCommentsByOrgs).toHaveBeenCalledWith('orgs');
  });
});
