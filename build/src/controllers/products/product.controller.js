"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("yup"),
  string = _require.string,
  number = _require.number;
var _require2 = require("../../utils/url"),
  url = _require2.url;
var _require3 = require("../../models/index"),
  Brand = _require3.Brand,
  Category = _require3.Category,
  ProductImage = _require3.ProductImage,
  Product = _require3.Product;
var productServices = require("../../services/productServices/product.service");
var untilProduct = require("../../utils/deleteImage");
module.exports = {
  index: function () {
    var _index = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var successMessage, errorMessage, errorElements, warningMessage, host, products, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            successMessage = req.flash('success');
            errorMessage = req.flash('error');
            errorElements = req.errors;
            warningMessage = req.flash("warning");
            host = req.baseUrl;
            _context.n = 1;
            return productServices.getProducts();
          case 1:
            products = _context.v;
            res.render("products/products", {
              req: req,
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              errorElements: errorElements,
              title: "Home",
              categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],
              nav: true,
              products: products
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Lỗi khi load danh sách sản phẩm:", _t);
            res.status(500).send("Server error");
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    function index(_x, _x2) {
      return _index.apply(this, arguments);
    }
    return index;
  }(),
  deleteProduct: function () {
    var _deleteProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var id, product, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            id = req.params.id;
            _context2.n = 1;
            return Product.findByPk(id, {
              include: [{
                model: ProductImage,
                as: "images",
                attributes: ["id", "image_url", "is_primary"]
              }]
            });
          case 1:
            product = _context2.v;
            if (product) {
              _context2.n = 2;
              break;
            }
            req.flash("error", "Sản phẩm không tồn tại!");
            return _context2.a(2, res.redirect("/admin/v1/products"));
          case 2:
            _context2.n = 3;
            return untilProduct.deleteProductImages(product);
          case 3:
            _context2.n = 4;
            return product.destroy();
          case 4:
            req.flash("success", "Xóa sản phẩm thành công");
            res.redirect("/admin/v1/products");
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            console.error("Lỗi khi xóa sản phẩm:", _t2);
            req.flash("error", "Lỗi server khi xóa sản phẩm");
            res.redirect("/admin/v1/products");
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 5]]);
    }));
    function deleteProduct(_x3, _x4) {
      return _deleteProduct.apply(this, arguments);
    }
    return deleteProduct;
  }(),
  add: function () {
    var _add = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res, next) {
      var successMessage, errorMessage, errorElements, warningMessage, brands, brandData, categories, categoryData, host, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            successMessage = req.flash('success');
            errorMessage = req.flash('error');
            errorElements = req.errors;
            warningMessage = req.flash("warning");
            _context3.n = 1;
            return Brand.findAll();
          case 1:
            brands = _context3.v;
            brandData = brands.map(function (brand) {
              return brand.get({
                plain: true
              });
            });
            _context3.n = 2;
            return Category.findAll();
          case 2:
            categories = _context3.v;
            categoryData = categories.map(function (category) {
              return category.get({
                plain: true
              });
            });
            host = req.baseUrl;
            res.render("products/createProduct", {
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              errorElements: errorElements,
              req: req,
              brandData: brandData,
              categoryData: categoryData,
              nav: true,
              categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]]
            });
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error("Lỗi khi load trang thêm sản phẩm:", _t3);
            res.status(500).send("Server error");
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    function add(_x5, _x6, _x7) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  handleAddProduct: function () {
    var _handleAddProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res, next) {
      var extractProcessed, validateBody, _ref, product_img, product_images, processedImage, product_image, processedImages, data, instance, imagesData, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            extractProcessed = function extractProcessed(path) {
              var match = path.match(/processed-[^\\\/]+/);
              return match ? match[0] : null;
            }; // Xử lý ảnh chính (product_image)
            _context4.n = 1;
            return req.validate(req.body, {
              name: string().required("Vui lòng nhập tên sản phẩm").max(255, "Vui lòng không nhập tên sản phẩm quá 255 ký tự"),
              price: number().required("Vui lòng nhập giá sản phẩm").typeError("Vui lòng nhập giá tiền sản phẩm").min(0, "Giá sản phẩm không được nhỏ hơn 0"),
              stock: number().required("Vui lòng nhập số lượng sản phẩm").typeError("Vui lòng nhập số lượng sản phẩm").min(0, "Số lượng sản phẩm không được nhỏ hơn 0"),
              description: string().required("Vui lòng nhập mô tả sản phẩm"),
              category_id: number().typeError("Vui lòng chọn danh mục cho sản phẩm").required("Vui lòng chọn danh mục cho sản phẩm"),
              brand_id: number().typeError("Vui lòng chọn hãng sản xuất sản phẩm").required("Vui lòng chọn hãng sản xuất sản phẩm")
            });
          case 1:
            validateBody = _context4.v;
            if (validateBody) {
              _context4.n = 2;
              break;
            }
            req.session.selectedFiles = {
              product_image: req.files['product_image'] || null,
              product_images: req.files['product_images'] || []
            };
            req.flash("error", "Vui l\xF2ng nh\u1EADp \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng");
            return _context4.a(2, res.redirect("/admin/v1/products/add"));
          case 2:
            _ref = req.files || {}, product_img = _ref.product_image, product_images = _ref.product_images;
            processedImage = (product_img || []).map(function (img) {
              return extractProcessed(img.path);
            });
            product_image = processedImage.length > 0 ? processedImage[0] : null; // Xử lý ảnh phụ (product_images)
            processedImages = (product_images || []).map(function (img) {
              return extractProcessed(img.path);
            });
            data = _objectSpread(_objectSpread({}, req.body), {}, {
              product_image: product_image
            });
            _context4.n = 3;
            return productServices.createProduct(data);
          case 3:
            instance = _context4.v;
            if (instance.id) {
              _context4.n = 4;
              break;
            }
            req.session.old = req.body;
            req.flash("error", "Th\xEAm s\u1EA3n ph\u1EA9m th\u1EA5t b\u1EA1i");
            return _context4.a(2, res.redirect("/admin/v1/products/add"));
          case 4:
            if (!(processedImages.length > 0)) {
              _context4.n = 5;
              break;
            }
            imagesData = processedImages.map(function (image_url) {
              return {
                product_id: instance.id,
                image_url: image_url,
                is_primary: false
              };
            });
            _context4.n = 5;
            return ProductImage.bulkCreate(imagesData);
          case 5:
            req.flash("success", "Th\xEAm s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng");
            req.session.old = req.body;
            return _context4.a(2, res.redirect("/admin/v1/products/add"));
          case 6:
            _context4.p = 6;
            _t4 = _context4.v;
            console.error("Lỗi khi thêm sản phẩm:", _t4);
            req.session.selectedFiles = {
              product_image: req.files['product_image'] || null,
              product_images: req.files['product_images'] || []
            };
            req.session.old = req.body;
            req.flash("error", "Th\xEAm s\u1EA3n ph\u1EA9m th\u1EA5t b\u1EA1i");
            return _context4.a(2, res.redirect("/admin/v1/products/add"));
        }
      }, _callee4, null, [[0, 6]]);
    }));
    function handleAddProduct(_x8, _x9, _x0) {
      return _handleAddProduct.apply(this, arguments);
    }
    return handleAddProduct;
  }(),
  edit: function () {
    var _edit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res, next) {
      var id, baseUrl, successMessage, errorMessage, errorElements, warningMessage, host, brands, brandData, categories, categoryData, product, productData, avt, images, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            id = req.params.id;
            baseUrl = req.protocol + "://" + req.get("host");
            successMessage = req.flash('success');
            errorMessage = req.flash('error');
            errorElements = req.errors;
            warningMessage = req.flash("warning");
            host = req.baseUrl;
            _context5.n = 1;
            return Brand.findAll();
          case 1:
            brands = _context5.v;
            brandData = brands.map(function (brand) {
              return brand.get({
                plain: true
              });
            });
            _context5.n = 2;
            return Category.findAll();
          case 2:
            categories = _context5.v;
            categoryData = categories.map(function (category) {
              return category.get({
                plain: true
              });
            });
            _context5.n = 3;
            return productServices.serviceGetProductById(id);
          case 3:
            product = _context5.v;
            productData = product.toJSON();
            avt = baseUrl + "/images/products/" + productData.product_image;
            images = productData.images.map(function (_ref2) {
              var image_url = _ref2.image_url;
              return baseUrl + "/images/products/" + image_url;
            });
            res.render("products/edit", {
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              errorElements: errorElements,
              req: req,
              title: "Home",
              categories: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],
              nav: true,
              productData: productData,
              brandData: brandData,
              categoryData: categoryData,
              avt: avt,
              images: images
            });
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            console.error("Lỗi khi load trang sửa sản phẩm:", _t5);
            res.status(500).send("Server error");
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 4]]);
    }));
    function edit(_x1, _x10, _x11) {
      return _edit.apply(this, arguments);
    }
    return edit;
  }(),
  handleEdit: function () {
    var _handleEdit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res, next) {
      var id, body, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            id = req.params.id;
            body = req.body; // Tương tự validate và xử lý như handleAddProduct
            // TODO: bạn có thể viết xử lý update sản phẩm ở đây
            // Ví dụ:
            /*
            await productServices.updateProduct(id, body);
            req.flash("success", "Cập nhật sản phẩm thành công");
            return res.redirect("/admin/v1/products");
            */
            return _context6.a(2, res.json({
              message: "Chức năng cập nhật sản phẩm chưa được cài đặt"
            }));
          case 1:
            _context6.p = 1;
            _t6 = _context6.v;
            console.error("Lỗi khi cập nhật sản phẩm:", _t6);
            req.flash("error", "Cập nhật sản phẩm thất bại");
            return _context6.a(2, res.redirect("/admin/v1/products/edit/".concat(req.params.id)));
        }
      }, _callee6, null, [[0, 1]]);
    }));
    function handleEdit(_x12, _x13, _x14) {
      return _handleEdit.apply(this, arguments);
    }
    return handleEdit;
  }()
};