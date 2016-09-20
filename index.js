const app = require('./app');
const repository = require('./lib/repository');

const appRun = app(repository);

appRun.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port:' + process.env.PORT || 3000);
});
