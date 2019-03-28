function errorHandler(err, res) {
  console.log(err);
  res.status(500).send('Internal server error.');
}

module.exports = errorHandler;
