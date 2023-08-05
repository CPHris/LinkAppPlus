const mongoose = require('mongoose');
const request = require('supertest');
// const app = require('../src/pages/_app.tsx');
// const db = require('../src/pages/api/server/db.ts');
// require('dotenv').config();

/* Connecting to the database before each test. */
// beforeEach(async () => {
//   await mongoose.connect(process.env.DB_TEST);
// });

/* Closing database connection after each test. */
// afterEach(async () => {
//   await mongoose.connection.close();
// });

describe('getUser', () => {
  it('should get a user', async () => {
    const res = await request(app).get('user').send('Jorma');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
