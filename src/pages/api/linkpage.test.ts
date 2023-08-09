/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from './register';
import userHandler from './user';
import linkpageHandler from './linkpage';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponse('POST', postUserQuery, '');
    await registerHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('Linkpage API POST', () => {
  it('should add a linkpage', async () => {
    const { req, res } = mockRequestResponse('POST', postQuery, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400 when linkpage name is missing', async () => {
    const { req, res } = mockRequestResponse('POST', postQueryMissing_Name, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('Linkpage API GET', () => {
  it('should return linkpages', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, user not found', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    req.query = { username: 'does_not_exist' };
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('Linkpage API PUT', () => {
  it('should return a 400 missing value', async () => {
    const { req, res } = mockRequestResponse('PUT', putQueryMissingValue, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });
  it('should return a 201 on PUT', async () => {
    const { req, res } = mockRequestResponse('PUT', putQuery, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('Linkpage API DELETE', () => {
  it('should delete a linkpage', async () => {
    const { req, res } = mockRequestResponse('DELETE', deleteQuery, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, user does not exist', async () => {
    const { req, res } = mockRequestResponse(
      'DELETE',
      deleteQueryMissingName,
      '',
    );
    req.query = { username: '' };

    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(400);
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
const getQuery = { username: 'testerino' };
const deleteQuery = { username: 'testerino', pageid: 12345 };
const deleteQueryMissingName = { pageid: 12345 };
const postQuery = {
  username: 'testerino',
  linkpage: {
    pageid: '12345',
    name: 'Mr Link',
    avatarImg: '',
    description: 'This is a test page',
    backgroundImg: '#eeda22',
    textColor: '#fff',
    links: [],
  },
};
const postQueryMissing_Name = {
  username: 'testerino',
  linkpage: {
    pageid: '12345',
    avatarImg: '',
    description: 'This is a test page',
    backgroundImg: '#eeda22',
    textColor: '#fff',
    links: [],
  },
};
const postUserQuery = {
  username: 'testerino',
  email: 'testerino@diehard.me',
  linkPages: [],
};
const putQuery = { ...postQuery, ...{ linkpageid: 12345 } };
const putQueryMissingValue = { username: 'testerino' };

function mockRequestResponse(method: RequestMethod = 'GET', body, query) {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = reqHeader;
  req.body = body;
  req.query = query;
  return { req, res };
}
