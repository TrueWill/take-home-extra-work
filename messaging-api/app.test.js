const supertest = require('supertest');
const app = require('./app');
const security = require('./security');

// Integration tests

test('source route', done => {
  supertest(app)
    .get('/source')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res => expect(res.text).toContain('Redox Memorial Hospital'))
    .expect(200, done);
});

test('route when no token', done => {
  supertest(app)
    .get('/source')
    .set('Accept', 'application/json')
    .expect(403, done);
});

test('single source route when found', done => {
  supertest(app)
    .get('/source/4e7cb748-9d37-4705-9d16-bd68a80afc39')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res =>
      expect(res.text).toContain('Chicago University Health System')
    )
    .expect(200, done);
});

test('single source route when not found', done => {
  supertest(app)
    .get('/source/nosuch')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect(404, done);
});

test('messages for a source', done => {
  supertest(app)
    .get('/source/f4f96516-c5ec-43bb-ba21-da1f35dacf8a/message')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res => expect(res.body.length).toBe(100))
    .expect(200, done);
});

test('message status counts for a source', done => {
  supertest(app)
    .get('/source/f4f96516-c5ec-43bb-ba21-da1f35dacf8a/message/status')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res =>
      expect(res.body[0]).toEqual({ status: 'enqueued', count: 14 })
    )
    .expect(200, done);
});
