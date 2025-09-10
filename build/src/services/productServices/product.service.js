"use strict";

var ProductRepository = require("../../repositories/productRepository/product.repository");
var productRepository = new ProductRepository();
module.exports = {
  createProduct: function createProduct(body) {
    return productRepository.createProduct(body);
  },
  getProducts: function getProducts() {
    return productRepository.getAllProduct();
  },
  serviceGetProductById: function serviceGetProductById(id) {
    return productRepository.getProductById(id);
  }
};