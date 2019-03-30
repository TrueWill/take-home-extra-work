const express = require('express');
const repository = require('../persistence/repository');
const errorHandler = require('../errorHandler');

const router = express.Router();

router.get('/', function(req, res) {
  repository
    .getMessages()
    .then(sources => res.status(200).json(sources))
    .catch(err => errorHandler(err, res));
});

router.get('/:mid', (req, res) => {
  const messageId = req.params.mid;

  repository
    .getMessage(messageId)
    .then(source =>
      source ? res.status(200).json(source) : res.sendStatus(404)
    )
    .catch(err => errorHandler(err, res));
});

module.exports = router;
