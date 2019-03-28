const express = require('express');
const logger = require('morgan');
const nodeCleanup = require('node-cleanup');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const sourceRepository = require('./persistence/sourceRepository');

const app = express();
const port = 3001; // TODO move to config

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

nodeCleanup(() => sourceRepository.close());

sourceRepository
  .open()
  .then(() => app.listen(port, () => console.log('Listening on port ' + port)))
  .catch(err => console.log(err));
