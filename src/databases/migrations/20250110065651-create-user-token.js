module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('user_tokens', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        token: {
          type: Sequelize.STRING(255),
        },
        expired_at: {
          type: Sequelize.DATE,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      });
    },
    async down(queryInterface) {
      await queryInterface.dropTable('user_tokens');
    },
  };