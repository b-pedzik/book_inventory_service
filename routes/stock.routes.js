const express = require('express');

module.exports = ({ repo, auth }) => {
  const router = express.Router();
  const StockActions = require('../lib/StockActions')(repo);

  router.get('/', (req, res, next) => {
    console.log('Incomming request: ' + new Date());
    next();
  }, (req, res) => {
    res.send('Hello world pipeline!');
  });

  router.post('/stock', auth, StockActions.addStock);
  router.get('/stock', auth, StockActions.getAll);
  router.get('/stock/:isbn', auth, StockActions.getStock);

  return router;
};
