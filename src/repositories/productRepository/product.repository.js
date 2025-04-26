//Tương ứng với model User
const { Product, ProductImage, Brand, Category } = require("../../models/index")
const Repository = require("../../core/repository");
const bcrypt = require('bcrypt');
module.exports = class extends Repository {
  getModel() {
    return Product;
  }

  getAllProduct() {
    return this.findAll({
      include: [
        {
          model: ProductImage,
          as: "images",
          attributes: ["id", "image_url", "is_primary"]
        }
      ],
      order: [
        ["id", "DESC"],
        [{ model: ProductImage, as: "images" }, "is_primary", "DESC"]
      ]
    }).then(products =>
      products.map(product => product.get({ plain: true }))
    );
  }

  createProduct({
    name,
    description,
    price,
    stock,
    category_id,
    brand_id,
    product_image,
    processedImages: product_images
  }) {


    return this.create({
      name,
      description,
      price,
      stock,
      category_id,
      brand_id,
      product_image
    });

  }
  getProductById(id) {
    return this.findByPk(id, {
      include: [
        {
          model: ProductImage,
          as: "images",
          attributes: ["id", "image_url", "is_primary"]
        }

      ]
    })
  }

};