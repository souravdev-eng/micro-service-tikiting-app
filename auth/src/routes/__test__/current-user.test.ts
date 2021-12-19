import request from 'supertest';
import { app } from '../../app';

it('should return responds with user data', async () => {
  const cookie = await global.signup();

  const res = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send({})
    .expect(200);

  expect(res.body.currentUser.email).toEqual('test@gmail.com');
});

it('should return null if user not signin', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
