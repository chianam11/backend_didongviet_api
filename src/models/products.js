'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      // Liên kết với Category
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
      });

      // Liên kết với Brand
      Product.belongsTo(models.Brand, {
        foreignKey: 'brand_id',
        as: 'brand',
      });

      // Liên kết với ProductImage (1 sản phẩm có nhiều ảnh)
      Product.hasMany(models.ProductImage, {
        foreignKey: "product_id",
        as: "images"
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      underscored: true,
    }
  );

  return Product;
};
