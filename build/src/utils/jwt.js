"use strict";

var jwt = require("jsonwebtoken");
var _process$env = process.env,
  JWT_SECRET = _process$env.JWT_SECRET,
  JWT_ACCESS_TOKEN_EXPIRE = _process$env.JWT_ACCESS_TOKEN_EXPIRE,
  JWT_REFRESH_TOKEN_EXPIRE = _process$env.JWT_REFRESH_TOKEN_EXPIRE;
module.exports = {
  createAccessToken: function createAccessToken() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      return jwt.sign(data, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRE
      });
    } catch (_unused) {
      return false;
    }
  },
  createRefreshToken: function createRefreshToken() {
    try {
      return jwt.sign({
        value: Math.random() + new Date().getTime()
      }, JWT_SECRET, {
        expiresIn: JWT_REFRESH_TOKEN_EXPIRE
      });
    } catch (_unused2) {
      return false;
    }
  },
  verifyToken: function verifyToken(token) {
    try {
      return jwt.decode(token, JWT_SECRET);
    } catch (_unused3) {
      return false;
    }
  }
};