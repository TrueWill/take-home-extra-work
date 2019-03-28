const supertest = require('supertest');
const app = require('./app');

// Integration tests

test('source route', done => {
  supertest(app)
    .get('/source')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(res => expect(res.text).toContain('Redox Memorial Hospital'))
    .expect(200, done);
});
