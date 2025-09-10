"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../../../middlewares/imageMiddleware"),
  middlewareUploadFiles = _require.middlewareUploadFiles;
var productController = require("../../../controllers/products/product.controller");
var _require2 = require("./validateUpload"),
  validateUpload = _require2.validateUpload;
var authMiddleware = require("../../../middlewares/auth/auth.middleware");
var productRouter = function productRouter(app) {
  router.get("/", productController.index);
  router["delete"]("/:id", productController.deleteProduct);

  //-------------------------------------------------------------------
  router.get("/add", productController.add);
  router.post("/add", validateUpload, middlewareUploadFiles, productController.handleAddProduct);
  //-------------------------------------------------------------------
  router.get("/edit/:id", productController.edit);
  router.post("/edit/:id", validateUpload, middlewareUploadFiles, productController.handleAddProduct);
  return app.use("/admin/v1/products", authMiddleware, router);
};
module.exports = productRouter;