const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');
const errorHandler = require('./errorHandler');

module.exports = (repo) => {
  const app = express();

  app.use(bodyParser.json());

  app.use(router(repo));

  app.use(errorHandler.handleClientError);
  app.use(errorHandler.handleServerError);

  app.listen(process.env.port || 3000, () => {
    console.log('Example app listening on port:' + process.env.port || 3000);
  });

  return app;
};
