const express = require('express');
const sourceRepository = require('../persistence/sourceRepository');
const errorHandler = require('../errorHandler');

const router = express.Router();

router.get('/', function(req, res) {
  sourceRepository
    .getSources()
    .then(sources => res.status(200).json(sources))
    .catch(err => errorHandler(err, res));
});

module.exports = router;
