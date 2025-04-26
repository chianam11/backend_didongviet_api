const fs = require('fs');
const path = require('path');

module.exports = {
    deleteProductImages: async function (product) {

        try {
            // Xác nhận đường dẫn thư mục ảnh
            const imageDirectory = path.join(__dirname, '../../public/images/products');

            // Xóa ảnh chính
            if (product.product_image) {
                const mainImagePath = path.join(imageDirectory, product.product_image);

                if (fs.existsSync(mainImagePath)) {
                    fs.unlinkSync(mainImagePath);
                } else {
                    console.log(`⚠️ Ảnh chính không tồn tại tại: ${mainImagePath}`);
                }
            }

            // Xóa ảnh trong mảng images (nếu có)
            if (product.images && Array.isArray(product.images)) {
                for (const image of product.images) {
                    if (image.dataValues?.image_url) {
                        const imagePath = path.join(imageDirectory, image.dataValues.image_url);

                        if (fs.existsSync(imagePath)) {
                            fs.unlinkSync(imagePath);
                        } else {
                            console.log(`⚠️ Ảnh phụ không tồn tại tại: ${imagePath}`);
                        }
                    }
                }
            }
        } catch (error) {
            console.error("❌ Lỗi khi xóa ảnh sản phẩm:", error);
        }
    }
};
