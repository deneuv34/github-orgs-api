
const { deleteOrgComment } = require('../../../controllers');
const { deleteCommentByOrg } = require('../../../services');


jest.mock('../../../services/deleteCommentByOrg');

describe('controllers.deleteOrgComment', () => {

  it('should call the service', async () => {
    deleteCommentByOrg.mockImplementationOnce(() => ({}));

    await deleteOrgComment({ params: { orgs: 'orgs' } }, { json: jest.fn() });

    expect(deleteCommentByOrg).toHaveBeenCalledWith('orgs');
  });
});
