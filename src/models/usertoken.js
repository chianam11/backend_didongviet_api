const { Model, DataTypes } = require('sequelize');

class UserToken extends Model {
  static associate(models) {
    UserToken.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

module.exports = (sequelize) => {
  UserToken.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      expired_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'UserToken',
      tableName: 'user_tokens',
      underscored: true, // để Sequelize tự map createdAt -> created_at
      timestamps: true, // để Sequelize tự tạo createdAt và updatedAt
    }
  );

  return UserToken;
};
