const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json([{ foo: 'bar' }]);
});

module.exports = router;
