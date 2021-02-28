import request from 'supertest';

import app from '../app';
import createConnection from '../database/index';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'User', email: 'user@example.com' });
      
    expect(res.status).toBe(201);
    });

  it('Should not be able to create a user with a existing email', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'User', email: 'user@example.com' });
      
    expect(res.status).toBe(400);
  })
});