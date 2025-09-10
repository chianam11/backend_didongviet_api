"use strict";

var express = require("express");
var router = express.Router();
var authController = require("../../../../controllers/api/v1/auth/auth.controller");
var authMiddleware = require("../../../../middlewares/api/auth.middleware");
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);
router.get("/profile", authMiddleware, authController.profile);
module.exports = router; // Xuất router trực tiếp