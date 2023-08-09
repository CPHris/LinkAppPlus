/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from './register';
import userHandler from './user';
import linkpageHandler from './linkpage';
import linkpageIdHandler from './[linkpageid]';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponse('POST', postQuery, '');
    await registerHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('Linkpage API POST', () => {
  it('should add a linkpage', async () => {
    const { req, res } = mockRequestResponse('POST', linkPostQuery, '');
    await linkpageHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });
});

describe('[LinkpageId] API GET', () => {
  it('should return a link page', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    await linkpageIdHandler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, id missing', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    req.query = {
      linkpageid: null,
    };
    await linkpageIdHandler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 400, linkpage not found', async () => {
    const { req, res } = mockRequestResponse('GET', '', getQuery);
    req.query = {
      linkpageid: 'does_not_exist_for_sure_I_mean_how_could_it_really',
    };
    await linkpageIdHandler(req, res);
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
const getQuery = { linkpageid: '54321' };
const deleteQuery = { username: 'stuntdouble' };
const postQuery = {
  username: 'stuntdouble',
  email: 'teststuntdouble@diehard.me',
  linkPages: [],
};
const linkPostQuery = {
  username: 'stuntdouble',
  linkpage: {
    pageid: '54321',
    name: 'Mr Link',
    avatarImg: 'https://www.cartoonify.de/',
    description: 'This is a test page',
    backgroundImg: '#eeda22',
    textColor: '#fff',
    links: [],
  },
};

function mockRequestResponse(method: RequestMethod = 'GET', body, query) {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = reqHeader;
  req.body = body;
  req.query = query;
  return { req, res };
}
