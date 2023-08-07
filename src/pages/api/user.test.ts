/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from './register';
import userHandler from './user';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponse('POST', postQuery, '');
    await registerHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('User API', () => {
  it('should return a user', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    await userHandler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, user not found', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    req.query = { username: 'does_not_exist' };

    await userHandler(req, res);
    expect(res.statusCode).toBe(400);
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

  it('should return 500, user does not exist', async () => {
    const { req, res } = mockRequestResponse('DELETE', deleteQuery, '');
    req.query = { username: 'does_not_exist' };

    await userHandler(req, res);
    expect(res.statusCode).toBe(500);
  });
});

const postQuery = {
  username: 'Tester',
  email: 'testomatic@diehard.me',
  linkPages: [],
};

const getQuery = { username: 'Tester' };
const deleteQuery = { username: 'Tester' };
const reqHeader = { 'Content-Type': 'application/json' };

function mockRequestResponse(method: RequestMethod = 'GET', body, query) {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = reqHeader;
  req.body = body;
  req.query = query;
  return { req, res };
}
