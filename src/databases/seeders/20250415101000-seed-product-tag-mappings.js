'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        const [products] = await queryInterface.sequelize.query(`SELECT id FROM products;`);
        const [tags] = await queryInterface.sequelize.query(`SELECT id FROM product_tags;`);

        const productTagMappings = [];
        for (const product of products) {
            const shuffled = tags.sort(() => 0.5 - Math.random());
            const selectedTags = shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2~3 tags

            for (const tag of selectedTags) {
                productTagMappings.push({
                    product_id: product.id,
                    tag_id: tag.id,
                    created_at: new Date(),
                    updated_at: new Date()
                });
            }
        }

        await queryInterface.bulkInsert('product_tag_mappings', productTagMappings, {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('product_tag_mappings', null, {});
    }
};
