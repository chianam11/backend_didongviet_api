const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class UserInfo extends Model {
    static associate(models) {
      UserInfo.belongsTo(models.User, { foreignKey: 'user_id', as: "user" });
    }
  }

  UserInfo.init(
    {
      user_email: {
        type: DataTypes.STRING(100),
      },
      user_phone: {
        type: DataTypes.STRING(15),
      },
      user_location: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: 'UserInfo',
      tableName: 'user_info',
      timestamps: true,
      underscored: true,
    }
  );

  return UserInfo;
};
