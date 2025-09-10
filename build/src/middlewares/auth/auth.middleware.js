"use strict";

module.exports = function (req, res, next) {
  if (!req.user) {
    return res.redirect("/v1/admin/auth/login");
  }
  return next();
};