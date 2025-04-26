const apiLoginRouter = require("../api/v1/auth/login");
const apiProduct = require("../api/v1/products/product.api");

module.exports = (app) => {
    app.use("/api/v1/auth", apiLoginRouter); // Sử dụng router trực tiếp
    app.use("/api/v1/products/phones", apiProduct); // Sử dụng router trực tiếp
};
