const { Sequelize, QueryInterface } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [

      {
        name: "Điện thoại",
        description: "Các dòng điện thoại thông minh từ nhiều thương hiệu.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Laptop",
        description: "Máy tính xách tay phục vụ công việc và giải trí.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Máy tính bảng",
        description: "Thiết bị màn hình cảm ứng phục vụ công việc và giải trí.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Đồng hồ thông minh",
        description: "Thiết bị đeo tay thông minh hỗ trợ theo dõi sức khỏe.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Phụ kiện",
        description: "Tai nghe, sạc, ốp lưng và các phụ kiện công nghệ khác.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gaming",
        description: "Máy chơi game, PC gaming và các phụ kiện chơi game.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Màn hình",
        description: "Màn hình máy tính phục vụ làm việc và chơi game.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Linh kiện máy tính",
        description: "Card đồ họa, RAM, bo mạch chủ và linh kiện máy tính khác.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Thiết bị mạng",
        description: "Router, modem, bộ mở rộng sóng và thiết bị mạng khác.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Máy in & Máy scan",
        description: "Các loại máy in, máy scan phục vụ công việc văn phòng.",
        created_at: new Date(),
        updated_at: new Date(),
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
