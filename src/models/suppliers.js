'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {}
  Supplier.init(
    {
      name: DataTypes.STRING,
      contact_info: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Supplier',
      tableName: 'suppliers',
      underscored: true,
    }
  );
  return Supplier;
};
