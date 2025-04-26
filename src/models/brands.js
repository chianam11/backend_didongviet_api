'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      // Liên kết Brand với Product
      Brand.hasMany(models.Product, {
        foreignKey: 'brand_id',
        as: 'products',
      });
    }
  }
  Brand.init(
    {
      name: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      description: DataTypes.STRING(255),
      logo_url: DataTypes.STRING,
      website_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Brand',
      tableName: 'brands',
      underscored: true,
    }
  );
  return Brand;
};
