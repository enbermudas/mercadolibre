import supertest from 'supertest';
import server from './index';

const request = supertest(server);

it('Should return a success message.', async (done) => {
  const res = await request.get('/api/v1');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('online');
  done();
});
