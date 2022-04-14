
const Comments = require('../../../models/comments');
const { getDetailGithubOrgs, createComment } = require('../../../services');


jest.mock('../../../services/getDetailGithubOrgs');
jest.mock('../../../models/comments', () => ({
  create: jest.fn()
}));

describe('services.createComment', () => {

  it('should call get API service and call create model instance', async () => {
    Comments.create.mockImplementationOnce(() => ({}));
    getDetailGithubOrgs.mockResolvedValue({});
    await createComment('testorg', 'comment test');

    expect(getDetailGithubOrgs).toHaveBeenCalledWith('testorg');
    expect(Comments.create).toHaveBeenCalled();
  });

  it('should throw error', async () => {
    Comments.create.mockImplementationOnce(() => ({}));
    getDetailGithubOrgs.mockImplementationOnce(() => Promise.reject({ status:  400, message: 'not found' }));
    

    expect(createComment).rejects.toThrow();
  });
});
