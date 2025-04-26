'use strict';
const bcrypt = require("bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    var users = [];

    for (let i = 0; i < 100; i++) {
      const hash = bcrypt.hashSync("Chinam2004@", 10);
      let type = false
      if (i % 2 === 0) {
        type = true;
      }
      users.push({
        name: `nguyen chi nam${i}`,
        username: `nam${i}@gmail.com`,
        password: `${hash}`,
        status: true,
        type
      });
    }

    return queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
