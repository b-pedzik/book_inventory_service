const collection = require('../database');

const stockUp = (isbn, count) => collection.then(col => col.updateOne({ isbn }, { isbn, count}, { upsert: true }));
const findAll = () => collection.then(col => col.find({}).toArray());
const getStock = isbn => collection.then(col => col.find({ isbn }).limit(1).next());

module.exports = {
  stockUp,
  findAll,
  getStock
};
