/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from './register';
import userHandler from './user';
import loginHandler from './login';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponse('POST', postUserQuery, '');
    await registerHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
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
describe('Delete user API', () => {
  it('should delete a user', async () => {
    const { req, res } = mockRequestResponse('DELETE', deleteQuery, '');
    await userHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

const reqHeader = { 'Content-Type': 'application/json' };

function mockRequestResponse(method: RequestMethod = 'GET', body, query) {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = reqHeader;
  req.body = body;
  req.query = query;
  return { req, res };
}
const postUserQuery = {
  username: 'testerino',
  email: 'testerino@diehard.me',
  linkPages: [],
};
const deleteQuery = { username: 'testerino' };
