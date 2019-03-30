const security = require('./security');

test('calls next and sets credentials when valid', () => {
  const mockSendStatus = jest.fn();
  const mockNext = jest.fn();
  const req = {
    headers: {
      authorization: 'Bearer ' + security.tokenForTesting
    }
  };
  const res = {
    sendStatus: mockSendStatus
  };

  security.checkToken(req, res, mockNext);

  expect(mockNext.mock.calls.length).toBe(1);
  expect(mockSendStatus.mock.calls.length).toBe(0);
  expect(req.decoded).toBeTruthy();
  expect(req.decoded.name).toBe('Bill');
});

test('returns forbidden when not valid', () => {
  const mockSendStatus = jest.fn();
  const mockNext = jest.fn();
  const req = {
    headers: {
      authorization: 'Bearer 123'
    }
  };
  const res = {
    sendStatus: mockSendStatus
  };

  security.checkToken(req, res, mockNext);

  expect(mockNext.mock.calls.length).toBe(0);
  expect(mockSendStatus.mock.calls.length).toBe(1);
  expect(mockSendStatus.mock.calls[0][0]).toBe(403);
});

test('returns forbidden when not present', () => {
  const mockSendStatus = jest.fn();
  const mockNext = jest.fn();
  const req = {
    headers: {}
  };
  const res = {
    sendStatus: mockSendStatus
  };

  security.checkToken(req, res, mockNext);

  expect(mockNext.mock.calls.length).toBe(0);
  expect(mockSendStatus.mock.calls.length).toBe(1);
  expect(mockSendStatus.mock.calls[0][0]).toBe(403);
});
