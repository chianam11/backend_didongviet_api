'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Định nghĩa các mối quan hệ
      User.hasOne(models.UserInfo, {
        foreignKey: 'user_id',
        as: 'userInfo',
        onDelete: 'CASCADE', // Xóa User sẽ xóa cả UserInfo
      });

      User.belongsToMany(models.Role, {
        through: 'UserRole',
        foreignKey: 'user_id',
        otherKey: 'role_id',
        as: 'roles', // Alias để dễ dàng truy cập
      });
    }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      type: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'users', // Tên bảng trong cơ sở dữ liệu
      modelName: 'User', // Tên model
      timestamps: true, // Thêm các cột createdAt và updatedAt
      underscored: true, // Sử dụng định dạng snake_case trong cơ sở dữ liệu
      createdAt: 'created_at', // Tên cột createdAt
      updatedAt: 'updated_at', // Tên cột updatedAt
    }
  );

  return User;
};
