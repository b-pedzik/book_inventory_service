const express = require('express');
const bodyParser = require('body-parser');

const stockRoutes = require('./routes/stock.routes');
const errorHandler = require('./errorHandler');

module.exports = (repo) => {
  const app = express();

  app.use(bodyParser.json());

  app.use(stockRoutes(repo));

  app.use(errorHandler.handleClientError);
  app.use(errorHandler.handleServerError);

  return app;
};
