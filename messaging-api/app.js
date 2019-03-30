const express = require('express');
const logger = require('morgan');
const nodeCleanup = require('node-cleanup');
const cors = require('cors');
const security = require('./security');

const sourceRouter = require('./routes/source');
const messageRouter = require('./routes/message');

const sourceRepository = require('./persistence/sourceRepository');

const app = express();
const port = 8880; // TODO move to config

app.use(logger('dev'));

// NOTE: Currently allowing any origin - lock this down
// or remove it if can host both on same site
// NOTE: Will need to allow pre-flight if use DELETE
app.use(cors());

app.use(security.checkToken);

app.use('/source', sourceRouter);
app.use('/message', messageRouter);

nodeCleanup(() => sourceRepository.close());

sourceRepository
  .open()
  .then(() => app.listen(port, () => console.log('Listening on port ' + port)))
  .catch(err => console.log(err));

module.exports = app;
