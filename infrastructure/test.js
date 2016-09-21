const heroin = require('heroin-js');

const configurator = heroin(process.env.HEROKU_API_TOKEN);

const prod = {
  name: 'book-inventoryservice-test',
  organization: undefined,
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars: {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: '3000',
    NODE_ENV: 'production'
  },
  addons: {},
  collaborators: ['slimek9@gmail.com', 'tomas17777@o2.pl'],
  features: {
    'runtime-dyno-metadata': {
      enabled: false
    },
    'log-runtime-metrics': {
      enabled: false
    },
    'http-session-affinity': {
      enabled: false
    },
    preboot: {
      enabled: false
    },
    'http-shard-header': {
      enabled: false
    },
    'http-end-to-end-continue': {
      enabled: false
    },
    'http-sni': {
      enabled: false
    },
    'app-alerting': {
      enabled: false
    }
  },
  formation: [{
    process: 'web',
    quantity: 1,
    size: 'Free'
  }],
  log_drains: ['syslog://data.logentries.com:13636']
};

configurator(prod);
