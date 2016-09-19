const express = require('express');
let StockActions;

const router = express.Router();

module.exports = (repo) => {
  StockActions = require('./lib/StockActions')(repo);

  router.get('/', (req, res, next) => {
    console.log('Incomming request: ' + new Date());
    next();
  }, (req, res) => {
    res.send('Hello world!');
  });

  router.post('/stock', StockActions.addStock);
  router.get('/stock', StockActions.getAll);
  router.get('/stock/:isbn', StockActions.getStock);

  return router;
};
