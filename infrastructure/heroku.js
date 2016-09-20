const heroin = require('heroin-js');

const configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('book-inventoryservice').then((result) => {
  console.log(result);
});

