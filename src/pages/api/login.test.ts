/**
 * @jest-environment node
 */
import { mockRequestResponse, addTestUser, deleteTestUser } from './utils';
import loginHandler from './login';

beforeAll(() => {
  return addTestUser();
});

afterAll(() => {
  return deleteTestUser();
});

describe('Login API', () => {
  it('should login a user', async () => {
    const { req, res } = mockRequestResponse(
      'POST',
      { username: 'testerino' },
      '',
    );
    await loginHandler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });
});
