'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [];

    const adminHash = bcrypt.hashSync("Chinam2004@", 10);
    const guestHash = bcrypt.hashSync("guest", 10);

    users.push({
      name: "Admin User",
      username: "admin",
      password: adminHash,
      status: true,
      type: true // Giả sử admin = true
    });

    users.push({
      name: "Guest User",
      username: "guest",
      password: guestHash,
      status: true,
      type: false // Giả sử guest = false
    });

    return queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {
      username: ['admin', 'guest']
    });
  }
};
