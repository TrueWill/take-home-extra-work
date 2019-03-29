const sut = require('./sourceRepository');

// Integration tests

beforeAll(() => sut.open());

afterAll(() => {
  sut.close();
});

test('retrieve all sources', () => {
  return sut.getSources().then(sources => expect(sources.length).toBe(6));
});

test('retrieve single source when found', () => {
  return sut
    .getSource('4e7cb748-9d37-4705-9d16-bd68a80afc39')
    .then(source =>
      expect(source.name).toBe('Chicago University Health System')
    );
});

test('retrieve single source when not found', () => {
  return sut.getSource('nosuch').then(source => expect(source).toBeNull());
});
