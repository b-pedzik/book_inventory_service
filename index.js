const app = require('./app');
const repository = require('./lib/repository');
const auth = require('./lib/auth')('root', 'root');

const appRun = app({ repo: repository, auth });

appRun.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port:' + process.env.PORT || 3000);
});
