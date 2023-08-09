/**
 * @jest-environment node
 */
import {
  mockRequestResponse,
  postUserQuery,
  deleteUserQuery,
  getQuery,
} from './utils';
import registerHandler from './register';
import userHandler from './user';

describe('Register API', () => {
  it('should add a user', async () => {
    const { req, res } = mockRequestResponse('POST', postUserQuery, '');
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
    const { req, res } = mockRequestResponse('DELETE', deleteUserQuery, '');
    await userHandler(req, res);
    expect(res.statusCode).toBe(201);
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return 500, user does not exist', async () => {
    const { req, res } = mockRequestResponse('DELETE', deleteUserQuery, '');
    req.query = { username: 'does_not_exist' };
    await userHandler(req, res);
    expect(res.statusCode).toBe(500);
  });
});
