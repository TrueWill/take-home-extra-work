const sut = require('./repository');

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

test('retrieve all messages for a source', () => {
  const sourceId = 'f4f96516-c5ec-43bb-ba21-da1f35dacf8a';

  return sut
    .getMessagesForSource(sourceId)
    .then(messages => expect(messages.length).toBe(100));
});

test('retrieve aggregate status of messages for a source', () => {
  const sourceId = 'f4f96516-c5ec-43bb-ba21-da1f35dacf8a';

  return sut
    .getMessageStatusCountsForSource(sourceId)
    .then(counts =>
      expect(counts).toEqual([
        { status: 'enqueued', count: 14 },
        { status: 'error', count: 52 },
        { status: 'finished', count: 15 },
        { status: 'processing', count: 19 }
      ])
    );
});

test('retrieve single message when found', () => {
  return sut
    .getMessage('8b3fbf5e-52b4-468a-8fda-228b45968a4a')
    .then(message => expect(message.status).toBe('enqueued'));
});

test('retrieve single message when not found', () => {
  return sut.getMessage('nosuch').then(message => expect(message).toBeNull());
});

test('retrieve all messages', () => {
  return sut
    .getMessages()
    .then(messages => expect(messages.length).toBe(17400));
});

test('create source', () => {
  return sut.createSource('Foo', 'development', 'utf8').then(id => {
    expect(id.length).toBe(36);
    sut.hardDeleteSource(id);
  });
});
