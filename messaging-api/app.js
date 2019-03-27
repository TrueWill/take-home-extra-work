var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = 3001; // TODO move to config

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log('Listening on port ' + port));