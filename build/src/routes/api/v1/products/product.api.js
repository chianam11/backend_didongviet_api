"use strict";

var express = require("express");
var router = express.Router();
var productController = require("../../../../controllers/api/v1/product/product.controller");
var authMiddleware = require("../../../../middlewares/api/auth.middleware");
router.get("/", productController.phone);
router.get("/:slug", productController.phoneDetailBySlug);
router.post("/batch", productController.batchProduct);
module.exports = router; // Xuất router trực tiếp