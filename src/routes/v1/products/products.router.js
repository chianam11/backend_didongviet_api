const express = require("express");
const router = express.Router();

const { middlewareUploadFiles } = require("../../../middlewares/imageMiddleware");
const productController = require("../../../controllers/products/product.controller");
const { validateUpload } = require("./validateUpload")
const authMiddleware = require("../../../middlewares/auth/auth.middleware");






const productRouter = (app) => {
  router.get("/", productController.index);
  router.delete("/:id", productController.deleteProduct)

  //-------------------------------------------------------------------
  router.get("/add", productController.add);
  router.post("/add", validateUpload, middlewareUploadFiles, productController.handleAddProduct);
  //-------------------------------------------------------------------
  router.get("/edit/:id", productController.edit);
  router.post("/edit/:id", validateUpload, middlewareUploadFiles, productController.handleAddProduct);
  return app.use("/admin/v1/products", authMiddleware, router);
};

module.exports = productRouter;
