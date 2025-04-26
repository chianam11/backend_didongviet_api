const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Cấu hình multer lưu ảnh vào ổ đĩa
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = "public/images/products";
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}_${uniqueSuffix}${ext}`);
    }
});

// Cấu hình multer với giới hạn kích thước và fileFilter
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // Giới hạn 2MB
        files: 10 // Giới hạn 10 file
    },
    fileFilter: (req, file, cb) => {

        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Chỉ được phép tải lên tệp tin ảnh!"), false);
        }
    }
});

// Middleware xử lý ảnh bằng Sharp
const middlewareUploadFiles = async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) return next();

    try {
        for (const field in req.files) {
            req.files[field] = await Promise.all(
                req.files[field].map(async (file) => {
                    const outputDir = "public/images/products"
                    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

                    const filename = `processed-${Date.now()}-${file.filename}.webp`;
                    const outputPath = path.join(outputDir, filename);
                    await sharp(file.path)
                        .resize({
                            width: 800,
                            height: 600,
                            fit: "inside",
                            withoutEnlargement: true,
                            kernel: sharp.kernel.lanczos3,
                        })
                        .toFormat("webp")
                        .toFile(outputPath)
                        .then()
                        .catch(err => console.error(err));
                    fs.unlinkSync(file.path); // Xóa ảnh gốc sau khi xử lý
                    return {
                        originalname: file.originalname,
                        path: outputPath
                    };
                })
            );
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { upload, middlewareUploadFiles };
