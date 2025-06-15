
require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT, DB_DIALECT } =
  process.env;
console.log('DB_USER:', process.env.DB_USERNAME);
console.log('DB_PASS:', process.env.DB_PASSWORD);
module.exports = {
  development: {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT,
    logger: false
  },
  test: {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT
  },
  production: {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT
  },
};