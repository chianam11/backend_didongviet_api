"use strict";

var _require = require('html-entities'),
  encode = _require.encode;
module.exports = function (req, res, next) {
  if (req.body) {
    for (var key in req.body) {
      if (typeof req.body[key] === 'string') {
        // Sanitize từng giá trị trong body
        req.body[key] = encode(req.body[key]);
      }
    }
  }
  next(); // Tiếp tục middleware
};