const express = require("express");
const router = express.Router();
const productController = require("../../../../controllers/api/v1/product/product.controller")
const authMiddleware = require("../../../../middlewares/api/auth.middleware")
router.get("/", productController.phone);
router.get("/:slug", productController.phoneDetailBySlug);
router.post("/batch", productController.batchProduct)


module.exports = router;  // Xuất router trực tiếp
