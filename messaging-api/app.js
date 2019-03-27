const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const port = 3001; // TODO move to config

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log('Listening on port ' + port));
