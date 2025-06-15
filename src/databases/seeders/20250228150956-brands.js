'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const brands = [
            {
                name: "Apple",
                description: "Thương hiệu nổi tiếng với các sản phẩm như iPhone, iPad, MacBook, Apple Watch.",
                logo_url: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202272249",
                website_url: "https://www.apple.com",
            },
            {
                name: "Samsung",
                description: "Tập đoàn công nghệ hàng đầu Hàn Quốc, sản xuất điện thoại, TV, thiết bị điện tử.",
                logo_url: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_4.png",
                website_url: "https://www.samsung.com",
            },
            {
                name: "Xiaomi",
                description: "Thương hiệu Trung Quốc chuyên điện thoại, thiết bị nhà thông minh và phụ kiện.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
                website_url: "https://www.mi.com",
            },
            {
                name: "OPPO",
                description: "Thương hiệu điện thoại Trung Quốc nổi bật với camera selfie và sạc nhanh.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/OPPO_LOGO_2019.svg",
                website_url: "https://www.oppo.com",
            },
            {
                name: "Vivo",
                description: "Hãng điện thoại Trung Quốc nổi tiếng với công nghệ âm thanh và camera.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Vivo_logo_2019.svg",
                website_url: "https://www.vivo.com",
            },
            {
                name: "Realme",
                description: "Hãng con của OPPO, chuyên sản xuất điện thoại cấu hình tốt giá rẻ.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Realme_logo.png",
                website_url: "https://www.realme.com",
            },
            {
                name: "Nokia",
                description: "Hãng điện thoại Phần Lan nổi tiếng một thời với các dòng điện thoại bền bỉ.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nokia_wordmark.svg",
                website_url: "https://www.nokia.com",
            },
            {
                name: "ASUS",
                description: "Hãng công nghệ Đài Loan nổi tiếng với laptop, linh kiện máy tính và điện thoại.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/AsusTek_Computer_Logo.svg",
                website_url: "https://www.asus.com",
            },
            {
                name: "Lenovo",
                description: "Thương hiệu máy tính hàng đầu Trung Quốc, nổi bật với dòng ThinkPad và Yoga.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lenovo_logo_2015.svg",
                website_url: "https://www.lenovo.com",
            },
            {
                name: "Sony",
                description: "Hãng công nghệ Nhật Bản sản xuất điện thoại, TV, máy ảnh và tai nghe.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sony_Logo.svg",
                website_url: "https://www.sony.com",
            },
            {
                name: "Edifier",
                description: "Hãng chuyên về loa và tai nghe chất lượng cao từ Trung Quốc.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Edifier_logo.svg",
                website_url: "https://www.edifier.com",
            },
            {
                name: "Boya",
                description: "Thương hiệu micro chuyên nghiệp cho thu âm, podcast và livestream.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Boya_logo.png",
                website_url: "https://www.boya-mic.com",
            },
            {
                name: "Acefast",
                description: "Thương hiệu phụ kiện công nghệ trẻ trung với thiết kế hiện đại.",
                logo_url: "https://www.acefast.com/uploadfile/2022/0621/20220621024100733.png",
                website_url: "https://www.acefast.com",
            },
            {
                name: "RiverSong",
                description: "Thương hiệu đồng hồ thông minh và phụ kiện công nghệ giá tốt.",
                logo_url: "https://riversongtech.com/wp-content/uploads/2020/10/Riversong-logo-01.png",
                website_url: "https://riversongtech.com",
            },
            {
                name: "Infinix",
                description: "Hãng điện thoại Trung Quốc phổ biến ở thị trường mới nổi.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Infinix_logo.svg",
                website_url: "https://www.infinixmobility.com",
            },
            {
                name: "Itel",
                description: "Thương hiệu điện thoại giá rẻ thuộc tập đoàn Transsion.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Itel_logo.svg",
                website_url: "https://www.itel-mobile.com",
            },
            {
                name: "Mobell",
                description: "Hãng điện thoại giá rẻ và điện thoại cơ bản tại Việt Nam.",
                logo_url: "https://mobell.vn/themes/mobell/assets/images/logo.png",
                website_url: "https://mobell.vn",
            },
            {
                name: "MSI",
                description: "Hãng máy tính và linh kiện gaming nổi tiếng từ Đài Loan.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Msi-Logo.svg",
                website_url: "https://www.msi.com",
            },
            {
                name: "Razer",
                description: "Thương hiệu gaming gear và laptop nổi bật với thiết kế đậm chất game thủ.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Razer_wordmark_green.svg",
                website_url: "https://www.razer.com",
            },
            {
                name: "Amazon",
                description: "Thương hiệu nổi tiếng với các sản phẩm Kindle.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                website_url: "https://www.amazon.com",
            },
            {
                name: "Anker",
                description: "Hãng nổi tiếng với các sản phẩm phụ kiện, loa và tai nghe.",
                logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Anker_logo_2019.svg",
                website_url: "https://www.anker.com",
            },
            {
                name: "Loa",
                description: "Thương hiệu chuyên loa và thiết bị âm thanh.",
                logo_url: "https://some-logo-url.com",
                website_url: "https://some-brand-url.com",
            },
        ];

        const insertList = [];

        for (const brand of brands) {
            const [existing] = await queryInterface.sequelize.query(
                `SELECT COUNT(*) AS count FROM brands WHERE name = :name`,
                {
                    replacements: { name: brand.name },
                    type: Sequelize.QueryTypes.SELECT
                }
            );

            if (parseInt(existing.count) === 0) {
                insertList.push({
                    ...brand,
                    created_at: new Date(),
                    updated_at: new Date(),
                });
                console.log(`➕ Thêm brand: ${brand.name}`);
            } else {
                console.log(`✅ Đã tồn tại brand: ${brand.name}`);
            }
        }

        if (insertList.length > 0) {
            await queryInterface.bulkInsert('brands', insertList);
        } else {
            console.log("⚠️ Không có brand nào được thêm.");
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('brands', null, {});
    }
};
