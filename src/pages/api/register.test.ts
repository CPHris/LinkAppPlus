/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from './register';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponsePost('POST');
    await handler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

const postQuery = {
  username: 'Tester',
  email: 'testomatic@diehard.me',
  linkPages: [],
};

function mockRequestResponsePost(method: RequestMethod = 'PUT') {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = {
    'Content-Type': 'application/json',
  };
  req.body = postQuery;
  return { req, res };
}
