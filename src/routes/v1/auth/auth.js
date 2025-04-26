
var express = require('express');
var router = express.Router();
const passport = require("passport");

const authController = require("../../../controllers/auth/auth.controller")
const authentication = (app) => {
  router.get("/login", authController.login)
  router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        req.flash("error", info.message);
        return res.redirect("/v1/admin/auth/login");
      }

      req.login(user, (err) => {
        if (err) return next(err);
        req.flash("success", "Đăng nhập thành công.");
        return res.redirect("/");
      });
    })(req, res, next);
  });

  router.get("/logout", (req, res) => {
    req.logout((error) => {
      if (!error) {
        req.flash("success", "Đăng xuất tài khoản thành công.")
        return res.redirect("/v1/admin/auth/login");
      }
    });
  });

  return app.use("/v1/admin/auth", router)
}

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