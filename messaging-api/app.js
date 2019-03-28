const express = require('express');
const logger = require('morgan');
const nodeCleanup = require('node-cleanup');

const sourceRouter = require('./routes/source');
const messageRouter = require('./routes/message');

const sourceRepository = require('./persistence/sourceRepository');

const app = express();
const port = 8888; // TODO move to config

app.use(logger('dev'));

app.use('/source', sourceRouter);
app.use('/message', messageRouter);

nodeCleanup(() => sourceRepository.close());

sourceRepository
  .open()
  .then(() => app.listen(port, () => console.log('Listening on port ' + port)))
  .catch(err => console.log(err));
