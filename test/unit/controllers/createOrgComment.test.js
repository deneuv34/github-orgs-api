
const { createOrgComment } = require('../../../controllers');
const { createComment } = require('../../../services');


jest.mock('../../../services/createComment');

describe('controllers.createOrgComment', () => {

  it('should call get the service', async () => {
    createComment.mockImplementationOnce(() => ({}));

    await createOrgComment({ params: { orgs: 'orgs' }, body: { comment: 'hello world' } }, { status: (statusCode) => ({ json: jest.fn() }),  });

    expect(createComment).toHaveBeenCalledWith('orgs', 'hello world');
  });
});
