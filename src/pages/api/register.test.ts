/**
 * @jest-environment node
 */
import { mockRequestResponse, postUserQuery, deleteTestUser } from './utils';
import registerHandler from './register';

afterAll(() => {
  return deleteTestUser();
});

export const postMissingUserQuery = {
  email: 'testerino@diehard.me',
  linkPages: [],
};

describe('Register API', () => {
  it('should not register without a name', async () => {
    const { req, res } = mockRequestResponse('POST', postMissingUserQuery, '');
    await registerHandler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });
});
