const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/book_inventory_service';

// Use connect method to connect to the server
const collection = MongoClient.connect(url, { db: { bufferMaxEntries: 0 } }).then(db => {
  return db.collection('books_blazej');
});

module.exports = collection;
