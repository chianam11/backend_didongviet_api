"use strict";

var express = require('express');
var router = express.Router();
var passport = require("passport");
var authController = require("../../../controllers/auth/auth.controller");
var authentication = function authentication(app) {
  router.get("/login", authController.login);
  router.post("/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) return next(err);
      if (!user) {
        req.flash("error", info.message);
        return res.redirect("/v1/admin/auth/login");
      }
      req.login(user, function (err) {
        if (err) return next(err);
        req.flash("success", "Đăng nhập thành công.");
        return res.redirect("/");
      });
    })(req, res, next);
  });
  router.get("/logout", function (req, res) {
    req.logout(function (error) {
      if (!error) {
        req.flash("success", "Đăng xuất tài khoản thành công.");
        return res.redirect("/v1/admin/auth/login");
      }
    });
  });
  return app.use("/v1/admin/auth", router);
};
module.exports = authentication;

// router.get("/google", passport.authenticate("google"));
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureFlash: true,
//     failureRedirect: "/auth/login",
//     successRedirect: "/",
//   }),
// );