const jwt = require('jsonwebtoken');

// This is **ONLY** an example.
// **NEVER** store passwords in git or any source code repository.
// This should be loaded from configuration or environment.
// Typically you would use OAuth 2 with an authorization server.
// For the demo, the client hardcodes a token generated with
// https://jwt.io/ using this secret and the HS256 algorithm.
const secret = 'DoNotUse';

const tokenForTesting =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJpbGwiLCJpYXQiOjE1MTYyMzkwMjJ9.C_Dhi8YKg4Qokrrv6xxEXM_Bqk0XfEexn1Efjm3Wppw';

// Middleware
const checkToken = (req, res, next) => {
  let token = req.headers['authorization'];

  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  } else {
    res.sendStatus(403);
    return;
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.sendStatus(403);
      return;
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

module.exports = {
  checkToken,
  tokenForTesting
};
