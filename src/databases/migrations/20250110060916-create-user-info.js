module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('user_info', {
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
        user_email: {
          type: Sequelize.STRING(100),
        },
        user_phone: {
          type: Sequelize.STRING(15),
        },
        user_location: {
          type: Sequelize.STRING(100),
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
      await queryInterface.dropTable('user_info');
    },
  };