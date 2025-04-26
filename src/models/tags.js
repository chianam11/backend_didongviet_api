'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Liên kết Tag với Product
      Tag.belongsTo(models.Product, {
        foreignKey: 'product',
        as: 'productDetails',
      });
    }
  }
  Tag.init(
    {
      product: DataTypes.INTEGER,
      tag: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tag',
      tableName: 'tags',
      underscored: true,
    }
  );
  return Tag;
};
