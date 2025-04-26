const { string, number } = require("yup")
const { url } = require("../../utils/url")
const { Brand, Category, ProductImage, Product } = require("../../models/index")
const productServices = require("../../services/productServices/product.service")
const untilProduct = require("../../utils/deleteImage");



module.exports = {
  index: async (req, res) => {

    try {
      const successMessage = req.flash('success')
      const errorMessage = req.flash('error')
      const errorElements = req.errors
      const warningMessage = req.flash("warning")
      const host = process.env.HOST + req.baseUrl;
      const products = await productServices.getProducts()
      res.render("products/products", {
        successMessage, errorMessage, warningMessage, errorElements, req, title: "Home",
        categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],
        nav: true,
        products
      })
    } catch (e) {


    }

  },
  deleteProduct: async (req, res) => {
    try {

      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [
          {
            model: ProductImage,
            as: "images",
            attributes: ["id", "image_url", "is_primary"]
          }

        ]
      });


      if (!product) {
        return res.status(404).json({ message: "Sản phẩm không tồn tại!" });
      }
      // Xóa file ảnh trước khi xóa sản phẩm
      await untilProduct.deleteProductImages(product);
      await product.destroy();
      req.flash("success", "Xóa sản phẩm thành công");
      res.redirect("/admin/v1/products")
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      res.status(500).json({ message: "Lỗi server!" });
    }
  }
  ,
  add: async (req, res, next) => {

    const successMessage = req.flash('success')
    const errorMessage = req.flash('error')
    const errorElements = req.errors
    const warningMessage = req.flash("warning")
    const brands = await Brand.findAll()
    const brandData = brands.map(brand => brand.get({ plain: true }));
    const categories = await Category.findAll()
    const categoryData = categories.map(categorie => categorie.get({ plain: true }));
    const host = process.env.HOST + req.baseUrl;

    res.render("products/createProduct", {
      successMessage, errorMessage, warningMessage, errorElements, req,
      brandData, categoryData,

      nav: true,
      categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],

    })
  },

  handleAddProduct: async (req, res, next) => {
    const body = req.body

    try {


      const validateBody = await req.validate(req.body, {
        name: string().required("Vui lòng nhập tên sản phẩm").max(255, "vui lòng không nhập tên sản phẩm quá 255 ký tự"),
        price: number().required("Vui lòng nhập giá sản phẩm")
          .typeError("Vui lòng nhập giá tiền sản phẩm")
          .min(0, "Giá sản phẩm không được nhỏ hơn 0")
        ,
        stock: number().required("Vui lòng nhập số lượng sản phẩm")
          .typeError("Vui lòng nhập số lượng sản phẩm")
          .min(0, "Số lượng sản phẩm không được nhỏ hơn 0")
        ,
        description: string().required("Vui lòng nhập mô tả sản phẩm"),
        category_id: number()
          .typeError("Vui lòng chọn danh mục cho sản phẩm")
          .required("Vui lòng chọn danh mục cho sản phẩm"),
        brand_id: number()
          .typeError("Vui lòng chọn hãng sản xuất sản phẩm")
          .required("Vui lòng chọn hãng sản xuất sản phẩm"),
      });


      if (!validateBody) {
        req.session.selectedFiles = {
          product_image: req.files['product_image'] || null,
          product_images: req.files['product_images'] || []
        };
        req.flash("error", `Vui lòng nhập đủ các trường`)
        return res.redirect("/admin/v1/products/add");
      }

      const { product_image: product_img, product_images } = req.files
      function extractProcessed(path) {
        let match = path.match(/processed-[^\\]+/);
        return match ? match[0] : null;
      }

      // Xử lý product_image (danh sách đơn)
      let processedImage = product_img.map((img) => extractProcessed(img.path));
      const product_image = processedImage[0]
      // Xử lý product_images (danh sách nhiều file)
      let processedImages = product_images.map((img) => extractProcessed(img.path));

      const data = { ...body, product_image };

      const instance = await productServices.createProduct(data);

      if (!instance.id) {
        req.session.old = req.body;
        req.flash("error", `Thêm sản phẩm thất bại`)
        return res.redirect("/admin/v1/products/add");
      }
      if (processedImages.length > 0) {
        const imagesData = processedImages.map((url) => ({
          product_id: instance.id,
          image_url: url,
          is_primary: false
        }));


        await ProductImage.bulkCreate(imagesData);
      }
      req.flash("success", `Thêm sản phẩm thành công`)
      req.session.old = req.body;


      return res.redirect("/admin/v1/products/add");



    } catch (e) {
      req.session.selectedFiles = {
        product_image: req.files['product_image'] || null,
        product_images: req.files['product_images'] || []
      };

      req.session.old = req.body;
      req.flash("error", `Thêm sản phẩm thất bại`);

      return res.redirect("/admin/v1/products/add");


    }


  },
  edit: async (req, res, next) => {
    try {
      const id = req.params.id;
      const baseUrl = req.protocol + "://" + req.get("host");
      const successMessage = req.flash('success')
      const errorMessage = req.flash('error')
      const errorElements = req.errors
      const warningMessage = req.flash("warning")
      const host = process.env.HOST + req.baseUrl;
      const brands = await Brand.findAll()
      const brandData = brands.map(brand => brand.get({ plain: true }));
      const categories = await Category.findAll()
      const categoryData = categories.map(categorie => categorie.get({ plain: true }));
      const product = await productServices.serviceGetProductById(id);
      const productData = product.toJSON();
      // <%= product_image.startsWith('http') ? product_image : '/images/products/' + product_image %>
      const avt = baseUrl + "/images/products/" + productData.product_image;
      const images = productData.images.map(({ image_url }) => {
        return baseUrl + "/images/products/" + image_url
      })

      res.render("products/edit", {
        successMessage, errorMessage, warningMessage, errorElements, req, title: "Home",
        categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],
        nav: true,
        productData, brandData, categoryData, avt,
        images
      })

    } catch (e) {
      res.json(e);
    }

  },
  handleEdit: async (req, res, next) => {
    return res.json({})
  }
}