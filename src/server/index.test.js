import supertest from 'supertest';
import server from './index';

const request = supertest(server);

// Status

it('Should return a success message', async (done) => {
  const res = await request.get('/api/v1');

  expect(res.statusCode).toEqual(200);
  expect(res.body.status).toBe('online');
  done();
});

// Items

it('Should fail if the query param "q" is not defined', async (done) => {
  const res = await request.get('/api/v1/items');

  expect(res.statusCode).toEqual(422);
  expect(Array.isArray(res.body.errors)).toBeTruthy();
  expect(res.body.errors[0].msg).toEqual('Query must be defined.');
  expect(res.body.errors[0].param).toEqual('q');
  expect(res.body.errors[0].location).toEqual('query');
  done();
});

it('Should succeed and return both items and categories as empty arrays', async (done) => {
  const res = await request.get('/api/v1/items').query({ q: 'a0a0a0a0a0a0a0a0a0' });

  expect(res.statusCode).toEqual(200);
  expect(Array.isArray(res.body.items)).toBeTruthy();
  expect(Array.isArray(res.body.categories)).toBeTruthy();
  expect(res.body.items.length).toEqual(0);
  expect(res.body.categories.length).toEqual(0);
  done();
});

it('Should succeed and return both items and categories as populated arrays', async (done) => {
  const res = await request.get('/api/v1/items').query({ q: 'notebook' });

  expect(res.statusCode).toEqual(200);
  expect(Array.isArray(res.body.items)).toBeTruthy();
  expect(Array.isArray(res.body.categories)).toBeTruthy();
  expect(res.body.items.length > 0).toBeTruthy;
  expect(res.body.categories.length > 0).toBeTruthy;
  done();
});
