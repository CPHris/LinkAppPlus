import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import registerHandler from '../register';
import userHandler from '../user';

const reqHeader = { 'Content-Type': 'application/json' };
export const getQuery = { username: 'testerino' };

export function mockRequestResponse(
  method: RequestMethod = 'GET',
  body,
  query,
) {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = reqHeader;
  req.body = body;
  req.query = query;
  return { req, res };
}

export const postUserQuery = {
  username: 'testerino',
  email: 'testerino@diehard.me',
  linkPages: [],
};

export const deleteUserQuery = { username: 'testerino' };

export async function addTestUser() {
  const { req, res } = mockRequestResponse('POST', postUserQuery, '');
  try {
    await registerHandler(req, res);
  } catch (err) {
    console.error(`Unable to add test user to the database. Error: ${err}`);
  }
}

export async function deleteTestUser() {
  const { req, res } = mockRequestResponse('DELETE', deleteUserQuery, '');
  try {
    await userHandler(req, res);
  } catch (err) {
    console.error(`Unable to delete test user from the database. Error: ${err}`);
  }
}