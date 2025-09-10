"use strict";

var _require = require("../../../middlewares/imageMiddleware"),
  upload = _require.upload;
var validateUpload = function validateUpload(req, res, next) {
  upload.fields([{
    name: "product_image",
    maxCount: 1
  },
  // Ảnh đại diện (1 file)
  {
    name: "product_images",
    maxCount: 9
  } // Ảnh phụ (tối đa 10 file)
  ])(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_COUNT") {
        req.flash("error", "Quá số lượng ảnh cho phép! Vui lòng không vượt quá 10 ảnh.");
      } else if (err.code === "LIMIT_FILE_SIZE") {
        req.flash("error", "Dung lượng ảnh không được quá 2MB!");
      } else {
        req.flash("error", err.message);
      }
      return res.redirect(303, "/admin/v1/products/add");
    }
    next();
  });
};
module.exports = {
  validateUpload: validateUpload
};