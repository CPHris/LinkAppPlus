import { createServer } from 'http';
import request from 'supertest';   

export const testClient = (handler: any) =>
  request(
    httpCreateServer(async (req, res) => {
      return apiResolver(req, res, undefined, handler);
    }),
  );
