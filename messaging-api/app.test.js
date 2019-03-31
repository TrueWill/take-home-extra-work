const supertest = require('supertest');
const app = require('./app');
const security = require('./security');
const repository = require('./persistence/repository');

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

test('messages for a source filtered by status', done => {
  supertest(app)
    .get('/source/f4f96516-c5ec-43bb-ba21-da1f35dacf8a/message?status=finished')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res => expect(res.body.length).toBe(15))
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

test('single message route when found', done => {
  supertest(app)
    .get('/message/8b3fbf5e-52b4-468a-8fda-228b45968a4a')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res => expect(res.text).toContain('enqueued'))
    .expect(200, done);
});

test('single message route when not found', done => {
  supertest(app)
    .get('/message/nosuch')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect(404, done);
});

test('message route', done => {
  supertest(app)
    .get('/message')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Content-Type', /json/)
    .expect(res => expect(res.body.length).toBe(17400))
    .expect(200, done);
});

test('create source route', done => {
  const data = {
    name: 'Bar',
    environment: 'development',
    encoding: 'utf8'
  };

  supertest(app)
    .post('/source')
    .send(data)
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect('Location', /source\//)
    .expect(201)
    .end((err, res) => {
      if (err) return done(err);
      if (res.headers.location) {
        const id = res.headers.location.replace('/source/', '');
        repository.hardDeleteSource(id).finally(done);
      } else {
        done();
      }
    });
});

test('update source route', done => {
  const id = 'bd5ab29c-af66-44c0-b2e9-f36eee05af97';
  const data = {
    name: 'New Name',
    environment: 'staging',
    encoding: 'utf8'
  };

  supertest(app)
    .put('/source/' + id)
    .send(data)
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect(204)
    .end(err => {
      if (err) return done(err);

      // Restore - note that updated_at is still changed
      repository
        .updateSource(id, {
          name: 'My Health System',
          environment: 'production',
          encoding: 'latin1'
        })
        .finally(done);
    });
});

test('delete source route when admin', done => {
  const id = '4e7cb748-9d37-4705-9d16-bd68a80afc39';

  supertest(app)
    .delete('/source/' + id)
    .set('Authorization', 'Bearer ' + security.adminTokenForTesting)
    .expect(204)
    .end(err => {
      if (err) return done(err);

      repository.undeleteSource(id).finally(done);
    });
});

test('delete source route when not admin', done => {
  const id = '4e7cb748-9d37-4705-9d16-bd68a80afc39';

  supertest(app)
    .delete('/source/' + id)
    .set('Authorization', 'Bearer ' + security.tokenForTesting)
    .expect(403, done);
});
