'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Liên kết Review với Product
      Review.belongsTo(models.Product, {
        foreignKey: 'product',
        as: 'productDetails',
      });
    }
  }
  Review.init(
    {
      product: DataTypes.INTEGER,
      user: DataTypes.INTEGER,
      rating: DataTypes.DECIMAL,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews',
      underscored: true,
    }
  );
  return Review;
};
