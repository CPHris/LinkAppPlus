/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from './user';

describe('User API', () => {
  it('should return a user', async () => {
    const { req, res } = mockRequestResponse();
    await handler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, user not found', async () => {
    const { req, res } = mockRequestResponse();
    req.query = { username: 'does_not_exist' };

    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });
});

const getQuery = { username: 'Tester' };

function mockRequestResponse(method: RequestMethod = 'GET') {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = {
    'Content-Type': 'application/json',
  };
  req.query = getQuery;
  return { req, res };
}
