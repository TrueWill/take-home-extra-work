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

router.get('/:id', (req, res) => {
  const id = req.params.id;

  sourceRepository
    .getSource(id)
    .then(source =>
      source ? res.status(200).json(source) : res.sendStatus(404)
    )
    .catch(err => errorHandler(err, res));
});

router.get('/:id/message', (req, res) => {
  const id = req.params.id;

  sourceRepository
    .getMessagesForSource(id)
    .then(messages => res.status(200).json(messages))
    .catch(err => errorHandler(err, res));
});

router.get('/:id/message/status', (req, res) => {
  const id = req.params.id;

  sourceRepository
    .getMessageStatusCountsForSource(id)
    .then(counts => res.status(200).json(counts))
    .catch(err => errorHandler(err, res));
});

module.exports = router;
