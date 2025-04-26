const { phoneData, laptopData, tabletData } = require("../../data/crawl");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { promisify } = require("util");
const crypto = require("crypto");

const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);

// Hàm giả lập dữ liệu sản phẩm từ nơi bạn crawl về
const phones = phoneData(); // <-- Nhớ import đúng hàm này từ file crawl của bạn

// ⚙️ Brand map
const brandMap = {
  iphone: 1,
  apple: 1,
  samsung: 2,
  sony: 3,
  huawei: 4,
  xiaomi: 5,
  oppo: 6,
  vivo: 7,
  realme: 8,
  oneplus: 9,
  honor: 10,
  google: 11,
  microsoft: 12,
  dell: 13,
  hp: 14,
  lenovo: 15,
  asus: 16,
  acer: 17,
  tecno: 18,
};

// 🔍 Xác định brand_id từ tên sản phẩm
const getBrandIdFromName = (productName) => {
  const cleanedName = productName.toLowerCase().replace(/\s+/g, " ").replace(/\n/g, " ");
  console.log(`Cleaned name: ${cleanedName}`); // Kiểm tra tên đã được làm sạch
  for (const [brand, id] of Object.entries(brandMap)) {
    if (cleanedName.includes(brand)) {
      return id;
    }
  }
  console.warn(`⚠️ Không tìm thấy brand_id cho sản phẩm: ${productName}`); // Thông báo khi không tìm thấy thương hiệu
  return null;
};

// ➖ Bỏ dấu tiếng Việt & tạo slug
const removeVietnameseTones = (str) => {
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
};

const generateSlug = (name) => {
  const cleaned = name.replace(/chính hãng.*$/i, "").replace(/\(.*?\)/g, "");
  const normalized = removeVietnameseTones(cleaned);
  return `${normalized}.html`;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    const category_id = 2; // Giữ nguyên nếu là điện thoại
    const products = [];
    const productImages = [];

    const downloadFolder = path.join(__dirname, "../../../public/images/products");
    if (!fs.existsSync(downloadFolder)) {
      fs.mkdirSync(downloadFolder, { recursive: true });
    }

    const downloadImage = async (url, filename) => {
      const processedFilename = `processed_${filename}.jpg`;
      const filePath = path.join(downloadFolder, processedFilename);
      try {
        const response = await axios({ url, responseType: "arraybuffer", timeout: 10000 });
        await writeFile(filePath, response.data);
        return processedFilename;
      } catch (error) {
        console.warn(`❌ Lỗi tải ảnh: ${url} (${error.message})`);
        return "processed_default.jpg"; // fallback
      }
    };

    // Xoá dữ liệu cũ
    await queryInterface.bulkDelete("product_images", null, {});
    await queryInterface.bulkDelete("products", null, {});

    // Kiểm tra và thêm dữ liệu vào bảng brands nếu chưa tồn tại
    for (const [brand, id] of Object.entries(brandMap)) {
      const brandExists = await queryInterface.sequelize.query(
        `SELECT COUNT(*) FROM brands WHERE id = :id`,
        { replacements: { id }, type: Sequelize.QueryTypes.SELECT }
      );
      if (brandExists[0].count === 0) {
        await queryInterface.bulkInsert('brands', [{
          id,
          name: brand,
          description: `Thương hiệu ${brand}`,
          logo_url: 'default_logo_url', // Bạn có thể thay bằng logo tương ứng
          website_url: 'default_website_url',
          created_at: new Date(),
          updated_at: new Date(),
        }]);
      }
    }

    for (const phone of phones) {
      const brand_id = getBrandIdFromName(phone.name);
      if (!brand_id) {
        console.warn(`⚠️ Không xác định được brand cho sản phẩm: ${phone.name}`);
        continue;
      }

      const nameSlug = removeVietnameseTones(phone.name);
      const filename = `${nameSlug}_${crypto.randomUUID()}`;
      const localImage = await downloadImage(phone.image, filename);

      const slug = generateSlug(phone.name);

      const product = {
        name: phone.name,
        description: `Sản phẩm ${phone.name} chính hãng, bảo hành 12 tháng.`,
        price: Math.floor(Math.random() * (4500000 - 2000000) + 2000000),
        stock: Math.floor(Math.random() * (300 - 50) + 50),
        category_id: category_id,
        brand_id: brand_id,
        slug: slug,
        product_image: localImage,
        created_at: new Date(),
        updated_at: new Date(),
      };
      products.push(product);
    }

    await queryInterface.bulkInsert("products", products, {});
    const inserted = await queryInterface.sequelize.query("SELECT id, product_image FROM products;");
    const insertedProducts = inserted[0];

    for (const prod of insertedProducts) {
      if (!prod.product_image || prod.product_image === "processed_default.jpg") {
        console.warn(`⚠️ Bỏ qua ảnh phụ cho sản phẩm ID ${prod.id} vì không có ảnh chính hợp lệ`);
        continue;
      }

      const sourcePath = path.join(downloadFolder, prod.product_image);
      const extraCount = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < extraCount; i++) {
        const extraFilename = `processed_${prod.id}_${i + 1}_${crypto.randomUUID()}.jpg`;
        const extraPath = path.join(downloadFolder, extraFilename);

        try {
          await copyFile(sourcePath, extraPath);
          productImages.push({
            product_id: prod.id,
            image_url: extraFilename,
            created_at: new Date(),
            updated_at: new Date(),
          });
        } catch (err) {
          console.error(`❌ Lỗi sao chép ảnh phụ cho ${prod.id}: ${err.message}`);
        }
      }
    }

    await queryInterface.bulkInsert("product_images", productImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_images", null, {});
    await queryInterface.bulkDelete("products", null, {});
  }
};
