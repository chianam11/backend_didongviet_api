const { phoneData } = require("../../data/crawl");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { promisify } = require("util");
const crypto = require("crypto");

const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);
const phones = phoneData();

const brandMap = {
  iphone: 1, apple: 1,
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

const getBrandIdFromName = (productName) => {
  const cleanedName = productName.toLowerCase().replace(/\s+/g, " ").replace(/\n/g, " ");
  for (const [brand, id] of Object.entries(brandMap)) {
    if (cleanedName.includes(brand)) return id;
  }
  console.warn(`⚠️ Không tìm thấy brand cho: ${productName}`);
  return null;
};

const removeVietnameseTones = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim().toLowerCase().replace(/\s+/g, "-");

async function generateSlug(name, queryInterface, usedSlugs) {
  const baseSlug = removeVietnameseTones(
    name.replace(/chính hãng.*$/i, "").replace(/\(.*?\)/g, "").trim()
  );
  let slug = `${baseSlug}.html`;
  let count = 0;

  while (true) {
    const exists = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as count FROM products WHERE slug = :slug`,
      {
        replacements: { slug },
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const existsInDb = parseInt(exists[0].count) > 0;
    const existsInBatch = usedSlugs.has(slug);

    if (!existsInDb && !existsInBatch) {
      usedSlugs.add(slug);
      return slug;
    }

    count++;
    slug = `${baseSlug}-${count}.html`;

    if (count >= 100) {
      throw new Error(`❌ Không thể tạo slug duy nhất cho: ${name}`);
    }
  }
}

async function downloadImage(url, filename) {
  const processedFilename = `processed_${filename}.jpg`;
  const filePath = path.join(downloadFolder, processedFilename);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await axios({
        url,
        responseType: "arraybuffer",
        timeout: 5000,
      });
      await writeFile(filePath, response.data);
      return processedFilename;
    } catch (error) {
      console.warn(`❌ Thử lần ${attempt + 1} không tải được: ${url} (${error.message})`);
    }
  }

  return "processed_default.jpg";
}

const downloadFolder = path.join(__dirname, "../../../public/images/products");
if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder, { recursive: true });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const category_id = 2;
    const products = [];
    const productImages = [];
    const usedSlugs = new Set(); // Dùng chung trong suốt quá trình seed

    console.log("🧹 Xoá dữ liệu cũ...");
    await queryInterface.bulkDelete("product_images", null, {});
    await queryInterface.bulkDelete("products", null, {});

    console.log("🔍 Kiểm tra và thêm brands nếu thiếu...");
    for (const [brand, id] of Object.entries(brandMap)) {
      const [results] = await queryInterface.sequelize.query(
        `SELECT COUNT(*) as count FROM brands WHERE name = :name`,
        {
          replacements: { name: brand },
          type: Sequelize.QueryTypes.SELECT,
        }
      );

      if (parseInt(results.count) === 0) {
        await queryInterface.bulkInsert("brands", [
          {
            id,
            name: brand,
            description: `Thương hiệu ${brand}`,
            logo_url: "default_logo_url",
            website_url: "default_website_url",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);
        console.log(`➕ Đã thêm brand mới: ${brand}`);
      } else {
        console.log(`✅ Brand đã tồn tại, bỏ qua: ${brand}`);
      }
    }

    console.log("📦 Bắt đầu thêm sản phẩm...");
    let index = 0;
    for (const phone of phones) {
      const brand_id = getBrandIdFromName(phone.name);
      if (!brand_id) continue;

      const filename = `${removeVietnameseTones(phone.name)}_${crypto.randomUUID()}`;
      const localImage = await downloadImage(phone.image, filename);
      const slug = await generateSlug(phone.name, queryInterface, usedSlugs);

      const product = {
        name: phone.name,
        description: `Sản phẩm ${phone.name} chính hãng, bảo hành 12 tháng.`,
        price: Math.floor(Math.random() * (4500000 - 2000000) + 2000000),
        stock: Math.floor(Math.random() * (300 - 50) + 50),
        category_id,
        brand_id,
        slug,
        product_image: localImage,
        created_at: new Date(),
        updated_at: new Date(),
      };

      products.push(product);
      index++;
      if (index % 10 === 0) console.log(`✅ Đã xử lý ${index} sản phẩm`);
    }

    console.log("🛒 Chèn dữ liệu vào bảng products...");
    await queryInterface.bulkInsert("products", products, {});

    const inserted = await queryInterface.sequelize.query("SELECT id, product_image FROM products;");
    const insertedProducts = inserted[0];

    for (const prod of insertedProducts) {
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
    console.log("✅ Seeder chạy hoàn tất!");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_images", null, {});
    await queryInterface.bulkDelete("products", null, {});
  }
};
