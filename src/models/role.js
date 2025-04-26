'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Many-to-Many với User
      Role.belongsToMany(models.User, {
        foreignKey: "role_id",
        through: "user_roles",
        as: "users",
      });
      Role.belongsToMany(models.Permission, {
        foreignKey: "role_id",
        through: "role_permissions",
        as: "permissions",
      });
    }
  }

  Role.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Role',
      tableName: 'roles',
      timestamps: false, // Nếu không cần timestamps
      underscored: true, // Chuyển camelCase thành snake_case trong DB
    }
  );

  return Role;
};
