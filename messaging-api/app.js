const express = require('express');
const logger = require('morgan');
const nodeCleanup = require('node-cleanup');
const cors = require('cors');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const security = require('./security');

const sourceRouter = require('./routes/source');
const messageRouter = require('./routes/message');

const repository = require('./persistence/repository');

const app = express();
const port = 8880; // TODO move to config

// In-memory cache by default
const cache = apicache.middleware;

app.use(logger('dev'));

const corsOptions = {
  methods: 'GET,PUT,POST,DELETE',
  exposedHeaders: 'Location'
};

// NOTE: Currently allowing any origin - lock this down
// or remove it if can host both on same site
app.use(cors(corsOptions));

app.use(security.checkToken);

app.use(bodyParser.json());

app.use(cache('15 seconds')); // TODO move to config

app.use('/source', sourceRouter);
app.use('/message', messageRouter);

nodeCleanup(() => repository.close());

repository
  .open()
  .then(() => app.listen(port, () => console.log('Listening on port ' + port)))
  .catch(err => console.log(err));

module.exports = app;
