module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING(40),
        },
        username: {
          type: Sequelize.STRING(100),
          unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        type: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
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
      await queryInterface.dropTable('users');
    },
  };