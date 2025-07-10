
const {DBmigconfig} = require('./../config/configmig.cjs');

const USER = encodeURIComponent(DBmigconfig.dbUser);
const PASSWORD = encodeURIComponent(DBmigconfig.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${DBmigconfig.dbHost}:${DBmigconfig.dbPort}/${DBmigconfig.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}
