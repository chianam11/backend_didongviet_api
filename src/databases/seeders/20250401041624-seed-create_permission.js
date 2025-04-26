'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      { name: 'user.read', description: 'Permission to read user data', created_at: new Date() },
      { name: 'user.create', description: 'Permission to create user data', created_at: new Date() },
      { name: 'user.update', description: 'Permission to update user data', created_at: new Date() },
      { name: 'user.delete', description: 'Permission to delete user data', created_at: new Date() },
      { name: 'role.read', description: 'Permission to read role data', created_at: new Date() },
      { name: 'role.create', description: 'Permission to create role data', created_at: new Date() },
      { name: 'role.update', description: 'Permission to update role data', created_at: new Date() },
      { name: 'role.delete', description: 'Permission to delete role data', created_at: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
