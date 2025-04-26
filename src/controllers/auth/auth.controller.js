const {
  errorResponse,
  successResponse,
} = require("../../helpers/response");
const {
  User,
  Role,
} = require("../../models/index");
const {
  createAccessToken,
  createRefreshToken,
  verifyToken,
} = require("../../utils/jwt");
const Yup = require('yup');
const bcrypt = require('bcrypt');
module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    const successMessage = req.flash('success')
    const errorMessage = req.flash('error')
    const errorElements = req.errors
    const warningMessage = req.flash("warning")
    res.render("auth/login", {
      error, layout: false
      , successMessage, errorElements, errorMessage, warningMessage
    })
  },
}