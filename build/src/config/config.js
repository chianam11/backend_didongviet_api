"use strict";

require("dotenv").config();
var _process$env = process.env,
  DB_HOST = _process$env.DB_HOST,
  DB_USERNAME = _process$env.DB_USERNAME,
  DB_PASSWORD = _process$env.DB_PASSWORD,
  DB_DATABASE = _process$env.DB_DATABASE,
  DB_PORT = _process$env.DB_PORT,
  DB_DIALECT = _process$env.DB_DIALECT;
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
  }
};