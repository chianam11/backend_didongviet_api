'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const permissions = [
            { name: 'user.read', description: 'Permission to read user data' },
            { name: 'user.create', description: 'Permission to create user data' },
            { name: 'user.update', description: 'Permission to update user data' },
            { name: 'user.delete', description: 'Permission to delete user data' },
            { name: 'role.read', description: 'Permission to read role data' },
            { name: 'role.create', description: 'Permission to create role data' },
            { name: 'role.update', description: 'Permission to update role data' },
            { name: 'role.delete', description: 'Permission to delete role data' }
        ];

        const toInsert = [];

        for (const perm of permissions) {
            const [exists] = await queryInterface.sequelize.query(
                `SELECT COUNT(*) AS count FROM permissions WHERE name = :name`,
                {
                    replacements: { name: perm.name },
                    type: Sequelize.QueryTypes.SELECT
                }
            );

            if (parseInt(exists.count) === 0) {
                toInsert.push({
                    ...perm,
                    created_at: new Date(),
                    updated_at: new Date()
                });
                console.log(`➕ Thêm permission: ${perm.name}`);
            } else {
                console.log(`✅ Đã tồn tại permission: ${perm.name}`);
            }
        }

        if (toInsert.length > 0) {
            await queryInterface.bulkInsert('permissions', toInsert);
        } else {
            console.log('⚠️ Không có permission nào được thêm.');
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('permissions', {
            name: [
                'user.read', 'user.create', 'user.update', 'user.delete',
                'role.read', 'role.create', 'role.update', 'role.delete'
            ]
        });
    }
};
