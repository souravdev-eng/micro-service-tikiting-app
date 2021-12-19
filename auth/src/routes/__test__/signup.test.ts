import request from 'supertest';
import { app } from '../../app';

it('should returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('should return 400 with an invalid email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'testjsjd', password: 'password' })
    .expect(400);
});

it('should return 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'testjsjd', password: 'pas' })
    .expect(400);
});

it('should return 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@gmail.com' })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({ password: 'password' })
    .expect(400);
});

it('should return 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@gmail.com' })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({ password: 'password' })
    .expect(400);
});

it('disallow duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@gmail.com', password: 'password' })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@gmail.com', password: 'password' })
    .expect(400);
});

it('should set-cookie after successfully signup', async () => {
  const res = await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@gmail.com', password: 'password' })
    .expect(201);

  expect(res.get('Set-Cookie')).toBeDefined();
});
