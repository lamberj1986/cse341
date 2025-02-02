const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

const initDb = (callback) => {
  if (db) {
    console.log('Database is already initialized!');
    return callback(null, db);
  }

  MongoClient.connect(process.env.DB_URI)
    .then((client) => {
      db = client.db();
      console.log('Connected to MongoDB');
      callback(null, db);
    })
    .catch((err) => callback(err));
};

const getDb = () => {
  if (!db) throw Error('Database not initialized!');
  return db;
};

module.exports = { initDb, getDb };