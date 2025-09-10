"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var successMessage = req.flash('success');
  var errorMessage = req.flash('error');
  var errorElements = req.errors;
  var warningMessage = req.flash("warning");
  res.render("index", {
    successMessage: successMessage,
    errorElements: errorElements,
    errorMessage: errorMessage,
    warningMessage: warningMessage
  });
});
module.exports = router;