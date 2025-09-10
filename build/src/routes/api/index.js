"use strict";

var apiLoginRouter = require("../api/v1/auth/login");
var apiProduct = require("../api/v1/products/product.api");
module.exports = function (app) {
  app.use("/api/v1/auth", apiLoginRouter); // Sử dụng router trực tiếp
  app.use("/api/v1/products/phones", apiProduct); // Sử dụng router trực tiếp
};