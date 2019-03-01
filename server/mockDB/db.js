const pgp = require('pg-promise')();

const connectionString = 'postgres://trnluohn:PG5k_I45pMxP13fpSmTCqOI5DCMtamod@stampy.db.elephantsql.com:5432/trnluohn'
const db = pgp(connectionString);

module.exports = db;