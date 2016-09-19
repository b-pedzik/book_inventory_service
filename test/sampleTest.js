const assert = require('assert');
const request = require('supertest');
const inMemory = require('../inMemoryRepository');

const testStock = {
  isbn: 1617291781,
  count: 10
};

describe('POST /stock', () => {
  it('respond with json', (done) => {
    const app = require('../app')(inMemory());

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
    const app = require('../app')(repo);

    request(app)
      .get('/stock/' + testStock.isbn)
      .set('Accept', 'application/json')
      .expect(200, { count: testStock.count }, done);
  });
});
