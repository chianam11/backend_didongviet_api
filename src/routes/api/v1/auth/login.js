const express = require("express");
const router = express.Router();
const authController = require("../../../../controllers/api/v1/auth/auth.controller")
const authMiddleware = require("../../../../middlewares/api/auth.middleware")
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);
router.get("/profile", authMiddleware, authController.profile);


module.exports = router;  // Xuất router trực tiếp
