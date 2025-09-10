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
var _require = require('../../../../models'),
  Product = _require.Product,
  Brand = _require.Brand,
  sequelize = _require.sequelize,
  ProductImage = _require.ProductImage;
var _require2 = require("../../../../utils/pagination"),
  getPagination = _require2.getPagination,
  getPagingData = _require2.getPagingData;
module.exports = {
  phone: function () {
    var _phone = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res, next) {
      var brand, whereClause, _req$query, _req$query$page, page, _req$query$limit, limit, sort_by_price, sort_type, _getPagination, _limit, offset, brandRecord, order, phones, response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            brand = req.query.brand;
            whereClause = {};
            _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, sort_by_price = _req$query.sort_by_price, sort_type = _req$query.sort_type;
            _getPagination = getPagination(page, limit), _limit = _getPagination.limit, offset = _getPagination.offset;
            if (!brand) {
              _context.n = 3;
              break;
            }
            _context.n = 1;
            return Brand.findOne({
              where: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), brand.toLowerCase())
            });
          case 1:
            brandRecord = _context.v;
            if (brandRecord) {
              _context.n = 2;
              break;
            }
            return _context.a(2, res.status(404).json({
              message: 'Brand not found'
            }));
          case 2:
            whereClause.brand_id = brandRecord.id;
          case 3:
            order = [];
            if (sort_by_price === 'true') {
              order.push(['price', (sort_type === null || sort_type === void 0 ? void 0 : sort_type.toUpperCase()) === 'DESC' ? 'DESC' : 'ASC']);
            }
            _context.n = 4;
            return Product.findAndCountAll({
              where: whereClause,
              limit: _limit,
              offset: offset,
              order: order,
              include: [{
                model: Brand,
                as: 'brand',
                attributes: ['name']
              }]
            });
          case 4:
            phones = _context.v;
            response = getPagingData(phones, page, _limit);
            return _context.a(2, res.json(response));
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error(_t);
            return _context.a(2, res.status(500).json({
              message: 'Internal server error'
            }));
        }
      }, _callee, null, [[0, 5]]);
    }));
    function phone(_x, _x2, _x3) {
      return _phone.apply(this, arguments);
    }
    return phone;
  }(),
  phoneDetailBySlug: function () {
    var _phoneDetailBySlug = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var slug, product, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            slug = req.params.slug;
            _context2.n = 1;
            return Product.findOne({
              where: {
                slug: slug
              },
              include: [{
                model: Brand,
                as: 'brand',
                attributes: ['name']
              }, {
                model: ProductImage,
                as: 'images',
                attributes: ['image_url'],
                required: false // Optional join
              }]
            });
          case 1:
            product = _context2.v;
            if (product) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, res.status(404).json({
              message: 'Product not found'
            }));
          case 2:
            return _context2.a(2, res.json(product));
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error(_t2);
            return _context2.a(2, res.status(500).json({
              message: 'Internal server error'
            }));
        }
      }, _callee2, null, [[0, 3]]);
    }));
    function phoneDetailBySlug(_x4, _x5) {
      return _phoneDetailBySlug.apply(this, arguments);
    }
    return phoneDetailBySlug;
  }(),
  batchProduct: function () {
    var _batchProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var items, slugs, products, quantityMap, productsWithQuantity, totalOrderPrice, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            items = req.body.items; // mảng [{slug, quantity}, ...]
            if (!(!Array.isArray(items) || items.length === 0)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, res.status(400).json({
              error: "Missing items array"
            }));
          case 1:
            _context3.p = 1;
            // Lấy mảng slug để truy vấn DB
            slugs = items.map(function (item) {
              return item.slug;
            }); // Lấy tất cả sản phẩm theo slug
            _context3.n = 2;
            return Product.findAll({
              where: {
                slug: slugs
              }
            });
          case 2:
            products = _context3.v;
            // Map slug -> quantity cho dễ lookup
            quantityMap = {};
            items.forEach(function (_ref) {
              var slug = _ref.slug,
                quantity = _ref.quantity;
              quantityMap[slug] = quantity;
            });

            // Ghép sản phẩm với số lượng và tính totalPrice từng sản phẩm
            productsWithQuantity = products.map(function (product) {
              var quantity = quantityMap[product.slug] || 0;
              var totalPrice = product.price * quantity;
              return _objectSpread(_objectSpread({}, product.toJSON()), {}, {
                quantity: quantity,
                totalPrice: totalPrice
              });
            }); // (Tuỳ chọn) Tính tổng tiền toàn bộ đơn hàng
            totalOrderPrice = productsWithQuantity.reduce(function (sum, p) {
              return sum + p.totalPrice;
            }, 0);
            res.json({
              products: productsWithQuantity,
              totalOrderPrice: totalOrderPrice
            });
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error(_t3);
            res.status(500).json({
              error: "Server error"
            });
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    function batchProduct(_x6, _x7) {
      return _batchProduct.apply(this, arguments);
    }
    return batchProduct;
  }()
};