const supertest = require('supertest');
const app = require('./app');

// Integration tests

test('source route', done => {
  supertest(app)
    .get('/source')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
});
