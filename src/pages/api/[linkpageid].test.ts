/**
 * @jest-environment node
 */
import { mockRequestResponse, addTestUser, deleteTestUser } from './utils';
import linkpageHandler from './linkpage';
import linkpageIdHandler from './[linkpageid]';

beforeAll(() => {
  return addTestUser();
});

afterAll(() => {
  return deleteTestUser();
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

const getQuery = { linkpageid: '54321' };
const linkPostQuery = {
  username: 'testerino',
  linkpage: {
    pageid: '54321',
    name: 'Mr Link',
    avatarImg: 'about:blank',
    description: 'This is a test page',
    backgroundImg: '#eeda22',
    textColor: '#fff',
    links: [],
  },
};
