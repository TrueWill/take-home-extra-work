const express = require('express');
const repository = require('../persistence/repository');
const errorHandler = require('../errorHandler');

const router = express.Router();

router.get('/', function(req, res) {
  repository
    .getSources()
    .then(sources => res.status(200).json(sources))
    .catch(err => errorHandler(err, res));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  repository
    .getSource(id)
    .then(source =>
      source ? res.status(200).json(source) : res.sendStatus(404)
    )
    .catch(err => errorHandler(err, res));
});

router.get('/:id/message', (req, res) => {
  const id = req.params.id;

  repository
    .getMessagesForSource(id)
    .then(messages => res.status(200).json(messages))
    .catch(err => errorHandler(err, res));
});

router.get('/:id/message/status', (req, res) => {
  const id = req.params.id;

  repository
    .getMessageStatusCountsForSource(id)
    .then(counts => res.status(200).json(counts))
    .catch(err => errorHandler(err, res));
});

// Add source
router.post('/', (req, res) => {
  const source = req.body;

  repository
    .createSource(source.name, source.environment, source.encoding)
    .then(id => {
      res.location('/source/' + id);
      res.status(201).send();
    })
    .catch(err => errorHandler(err, res));
});

// Update source
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const source = req.body;

  repository
    .updateSource(id, source)
    .then(() => {
      res.status(204).send();
    })
    .catch(err => errorHandler(err, res));
});

module.exports = router;
