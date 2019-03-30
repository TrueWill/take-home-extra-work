const sqlite3 = require('sqlite3').verbose();

let db;

function open() {
  // TODO: Do not hardcode path
  // TODO: Change mode to read/write
  return new Promise(
    (resolve, reject) =>
      (db = new sqlite3.Database(
        '/Users/bsorensen/take-home/db.sqlite',
        sqlite3.OPEN_READONLY,
        err => (err ? reject(err) : resolve())
      ))
  );
}

function close() {
  if (db) {
    db.close();
    db = null;
  }
}

function query(sql, params = {}) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => (err ? reject(err) : resolve(rows)));
  });
}

// Arguably should be checking deleted_at against current date as well.

// TODO: Add order
function getSources() {
  return query(
    `SELECT id, name
    FROM source
    WHERE deleted_at IS NULL;`
  );
}

// Promise resolves to null if not found.
// Not ideal, but easier to handle than rejecting.
function getSource(id) {
  return query(
    `SELECT id, name, environment, encoding, created_at, updated_at
    FROM source
    WHERE id = $id
      AND deleted_at IS NULL;`,
    {
      $id: id
    }
  ).then(resultSet => (resultSet.length > 0 ? resultSet[0] : null));
}

// Including as part of source repository rather than message repository
// as source is the aggregate root.

// TODO: Add order
// TODO: Support pagination
function getMessagesForSource(sourceId) {
  return query(
    `SELECT id, message, status, created_at, updated_at
    FROM message
    WHERE source_id = $sourceId
      AND deleted_at IS NULL;`,
    {
      $sourceId: sourceId
    }
  );
}

function getMessageStatusCountsForSource(sourceId) {
  return query(
    `SELECT status, COUNT(id) AS count
    FROM message
    WHERE source_id = $sourceId
      AND deleted_at IS NULL
    GROUP BY status
    ORDER BY status;`,
    {
      $sourceId: sourceId
    }
  );
}

module.exports = {
  open,
  close,
  getSources,
  getSource,
  getMessagesForSource,
  getMessageStatusCountsForSource
};
