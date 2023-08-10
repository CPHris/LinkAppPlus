/**
 * @jest-environment node
 */
import {
  mockRequestResponse,
  addTestUser,
  deleteTestUser,
  getQuery,
} from './utils';
import linkpageHandler from './linkpage';

beforeAll(() => {
  return addTestUser();
});

afterAll(() => {
  return deleteTestUser();
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

const putQuery = { ...postQuery, ...{ linkpageid: 12345 } };
const putQueryMissingValue = getQuery;
