var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const successMessage = req.flash('success')
  const errorMessage = req.flash('error')
  const errorElements = req.errors
  const warningMessage = req.flash("warning")

  res.render("index", { successMessage, errorElements, errorMessage, warningMessage })
});

module.exports = router;
