'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const tags = [
            'Apple',
            'iPhone',
            'New',
            'Hot',
            'VN/A'
        ];

        const tagsToInsert = [];

        for (const name of tags) {
            const [result] = await queryInterface.sequelize.query(
                `SELECT COUNT(*) AS count FROM product_tags WHERE name = :name`,
                {
                    replacements: { name },
                    type: Sequelize.QueryTypes.SELECT
                }
            );

            if (parseInt(result.count) === 0) {
                tagsToInsert.push({
                    name,
                    created_at: new Date(),
                    updated_at: new Date(),
                });
                console.log(`➕ Thêm tag: ${name}`);
            } else {
                console.log(`✅ Đã tồn tại tag: ${name}`);
            }
        }

        if (tagsToInsert.length > 0) {
            await queryInterface.bulkInsert('product_tags', tagsToInsert);
        } else {
            console.log("⚠️ Không có tag nào được thêm.");
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('product_tags', {
            name: ['Apple', 'iPhone', 'New', 'Hot', 'VN/A']
        });
    }
};
