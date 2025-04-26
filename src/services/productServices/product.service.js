const ProductRepository = require("../../repositories/productRepository/product.repository");
const productRepository = new ProductRepository();
module.exports = {
  createProduct: (body) => {
    return productRepository.createProduct(body)
  },
  getProducts: () => {
    return productRepository.getAllProduct()

  },
  serviceGetProductById: (id) => {
    return productRepository.getProductById(id);
  },

};