'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('product_tags', [
            { name: 'Apple', created_at: new Date(), updated_at: new Date() },
            { name: 'iPhone', created_at: new Date(), updated_at: new Date() },
            { name: 'New', created_at: new Date(), updated_at: new Date() },
            { name: 'Hot', created_at: new Date(), updated_at: new Date() },
            { name: 'VN/A', created_at: new Date(), updated_at: new Date() },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('product_tags', null, {});
    }
};
