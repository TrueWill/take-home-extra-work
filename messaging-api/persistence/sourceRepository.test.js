const sut = require('./sourceRepository');

// Integration tests

beforeAll(() => sut.open());

afterAll(() => {
  sut.close();
});

test('retrieve all sources', () => {
  expect.assertions(1);
  return sut.getSources().then(data => expect(data.length).toBe(6));
});
