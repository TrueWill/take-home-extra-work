const sut = require('./sourceRepository');

test('retrieve all sources', () => {
  expect.assertions(1);
  return sut.getSources().then(data => expect(data.length).toBe(6));
});
