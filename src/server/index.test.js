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
  expect(res.body.author).toEqual({ name: 'Enrique', lastname: 'Bermúdez' });
  expect(Array.isArray(res.body.items)).toBeTruthy();
  expect(Array.isArray(res.body.categories)).toBeTruthy();
  expect(res.body.items.length).toEqual(0);
  expect(res.body.categories.length).toEqual(0);
  done();
});

it('Should succeed and return both items and categories as populated arrays', async (done) => {
  const res = await request.get('/api/v1/items').query({ q: 'notebook' });

  expect(res.statusCode).toEqual(200);
  expect(res.body.author).toEqual({ name: 'Enrique', lastname: 'Bermúdez' });
  expect(Array.isArray(res.body.items)).toBeTruthy();
  expect(Array.isArray(res.body.categories)).toBeTruthy();
  expect(res.body.items.length > 0).toBeTruthy;
  expect(res.body.categories.length > 0).toBeTruthy;
  done();
});

// Items (Detail)

it('Should fail if the provided ID does not exists', async (done) => {
  const res = await request.get('/api/v1/items/a0a0a0a0a0a0a0a0a0');

  expect(res.statusCode).toEqual(404);
  expect(typeof res.body.error === 'string').toBeTruthy();
  expect(res.body.error).toEqual('Request failed with status code 404');
  done();
});

it('Should succeed and return an item', async (done) => {
  const itemsResponse = await request.get('/api/v1/items').query({ q: 'notebook' });
  const id = itemsResponse.body.items[0].id;

  const res = await request.get(`/api/v1/items/${id}`);

  expect(res.body.author).toEqual({ name: 'Enrique', lastname: 'Bermúdez' });
  expect(res.statusCode).toEqual(200);
  expect(res.body.id === id).toBeTruthy();
  done();
});
