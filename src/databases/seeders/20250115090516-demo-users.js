'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersToInsert = [];

    const userDefinitions = [
      {
        name: "Admin User",
        username: "admin",
        password: bcrypt.hashSync("Chinam2004@", 10),
        status: true,
        type: true
      },
      {
        name: "Guest User",
        username: "guest",
        password: bcrypt.hashSync("guest", 10),
        status: true,
        type: false
      }
    ];

    for (const user of userDefinitions) {
      const [existing] = await queryInterface.sequelize.query(
        `SELECT COUNT(*) AS count FROM users WHERE username = :username`,
        {
          replacements: { username: user.username },
          type: Sequelize.QueryTypes.SELECT
        }
      );

      if (parseInt(existing.count) === 0) {
        usersToInsert.push({
          ...user,
          created_at: new Date(),
          updated_at: new Date(),
        });
        console.log(`➕ Thêm user: ${user.username}`);
      } else {
        console.log(`✅ Đã tồn tại user: ${user.username}`);
      }
    }

    if (usersToInsert.length > 0) {
      await queryInterface.bulkInsert('users', usersToInsert);
    } else {
      console.log("⚠️ Không có user nào được thêm.");
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {
      username: ['admin', 'guest']
    });
  }
};
