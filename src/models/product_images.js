const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class ProductImage extends Model {
        static associate(models) {
            ProductImage.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product"
            });
        }
    }

    ProductImage.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "products", // Bảng chính
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            image_url: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            is_primary: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
            }
        },
        {
            sequelize,
            modelName: "ProductImage",
            tableName: "product_images",
            timestamps: true,
            underscored: true
        }
    );

    return ProductImage;
};
