"use strict";

var _require = require("../../helpers/response"),
  errorResponse = _require.errorResponse,
  successResponse = _require.successResponse;
var _require2 = require("../../models/index"),
  User = _require2.User,
  Role = _require2.Role;
var _require3 = require("../../utils/jwt"),
  createAccessToken = _require3.createAccessToken,
  createRefreshToken = _require3.createRefreshToken,
  verifyToken = _require3.verifyToken;
var Yup = require('yup');
var bcrypt = require('bcrypt');
module.exports = {
  login: function login(req, res) {
    var error = req.flash("error");
    var successMessage = req.flash('success');
    var errorMessage = req.flash('error');
    var errorElements = req.errors;
    var warningMessage = req.flash("warning");
    res.render("auth/login", {
      error: error,
      layout: false,
      successMessage: successMessage,
      errorElements: errorElements,
      errorMessage: errorMessage,
      warningMessage: warningMessage
    });
  }
};