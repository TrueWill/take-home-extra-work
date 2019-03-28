const sqlite3 = require('sqlite3').verbose();

// TODO: Do not hardcode path
// TODO: Close database

function getSources() {
  return new Promise(function(resolve, reject) {
    const db = new sqlite3.Database(
      '/Users/bsorensen/take-home/db.sqlite',
      sqlite3.OPEN_READONLY,
      err => {
        if (err) reject(err);

        db.all('SELECT * FROM source', function(err, rows) {
          if (err) reject(err);
          resolve(rows);
        });
      }
    );
  });
}

module.exports = {
  getSources
};
