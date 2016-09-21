const assert = require('assert');
const request = require('supertest');
const inMemory = require('../inMemoryRepository');
const auth = require('../lib/auth')('root', 'root');
const fakeAuth = require('../fakeAuth');

const testStock = {
  isbn: 1617291781,
  count: 10
};

describe('POST /stock with auth', () => {
  it('respond with json', (done) => {
    const app = require('../app')({ repo: inMemory(), auth });

    request(app)
      .post('/stock')
      .send(testStock)
      .set('Accept', 'application/json')
      .expect(401, done);
  });
});

describe('POST /stock', () => {
  it('respond with json', (done) => {
    const app = require('../app')({ repo: inMemory(), auth: fakeAuth });

    request(app)
      .post('/stock')
      .send(testStock)
      .set('Accept', 'application/json')
      .expect(200, testStock, done);
  });
});

describe('GET /stock/:isbn', () => {
  it('respond with json', (done) => {
    const repo = inMemory();
    repo._items([testStock]);
    const app = require('../app')({ repo: repo, auth: fakeAuth });

    request(app)
      .get('/stock/' + testStock.isbn)
      .set('Accept', 'application/json')
      .expect(200, { count: testStock.count }, done);
  });
});
