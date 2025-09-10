"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _require = require("../../data/crawl"),
  phoneData = _require.phoneData;
var fs = require("fs");
var path = require("path");
var axios = require("axios");
var _require2 = require("util"),
  promisify = _require2.promisify;
var crypto = require("crypto");
var writeFile = promisify(fs.writeFile);
var copyFile = promisify(fs.copyFile);
var phones = phoneData();
var brandMap = {
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
  tecno: 18
};
var getBrandIdFromName = function getBrandIdFromName(productName) {
  var cleanedName = productName.toLowerCase().replace(/\s+/g, " ").replace(/\n/g, " ");
  for (var _i = 0, _Object$entries = Object.entries(brandMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      brand = _Object$entries$_i[0],
      id = _Object$entries$_i[1];
    if (cleanedName.includes(brand)) return id;
  }
  console.warn("\u26A0\uFE0F Kh\xF4ng t\xECm th\u1EA5y brand cho: ".concat(productName));
  return null;
};
var removeVietnameseTones = function removeVietnameseTones(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").trim().toLowerCase().replace(/\s+/g, "-");
};
function generateSlug(_x, _x2, _x3) {
  return _generateSlug.apply(this, arguments);
}
function _generateSlug() {
  _generateSlug = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(name, queryInterface, usedSlugs) {
    var baseSlug, slug, count, exists, existsInDb, existsInBatch;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          baseSlug = removeVietnameseTones(name.replace(/chính hãng.*$/i, "").replace(/\(.*?\)/g, "").trim());
          slug = "".concat(baseSlug, ".html");
          count = 0;
        case 1:
          if (!true) {
            _context3.n = 5;
            break;
          }
          _context3.n = 2;
          return queryInterface.sequelize.query("SELECT COUNT(*) as count FROM products WHERE slug = :slug", {
            replacements: {
              slug: slug
            },
            type: queryInterface.sequelize.QueryTypes.SELECT
          });
        case 2:
          exists = _context3.v;
          existsInDb = parseInt(exists[0].count) > 0;
          existsInBatch = usedSlugs.has(slug);
          if (!(!existsInDb && !existsInBatch)) {
            _context3.n = 3;
            break;
          }
          usedSlugs.add(slug);
          return _context3.a(2, slug);
        case 3:
          count++;
          slug = "".concat(baseSlug, "-").concat(count, ".html");
          if (!(count >= 100)) {
            _context3.n = 4;
            break;
          }
          throw new Error("\u274C Kh\xF4ng th\u1EC3 t\u1EA1o slug duy nh\u1EA5t cho: ".concat(name));
        case 4:
          _context3.n = 1;
          break;
        case 5:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _generateSlug.apply(this, arguments);
}
function downloadImage(_x4, _x5) {
  return _downloadImage.apply(this, arguments);
}
function _downloadImage() {
  _downloadImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(url, filename) {
    var processedFilename, filePath, attempt, response, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          processedFilename = "processed_".concat(filename, ".jpg");
          filePath = path.join(downloadFolder, processedFilename);
          attempt = 0;
        case 1:
          if (!(attempt < 3)) {
            _context4.n = 7;
            break;
          }
          _context4.p = 2;
          _context4.n = 3;
          return axios({
            url: url,
            responseType: "arraybuffer",
            timeout: 5000
          });
        case 3:
          response = _context4.v;
          _context4.n = 4;
          return writeFile(filePath, response.data);
        case 4:
          return _context4.a(2, processedFilename);
        case 5:
          _context4.p = 5;
          _t4 = _context4.v;
          console.warn("\u274C Th\u1EED l\u1EA7n ".concat(attempt + 1, " kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c: ").concat(url, " (").concat(_t4.message, ")"));
        case 6:
          attempt++;
          _context4.n = 1;
          break;
        case 7:
          return _context4.a(2, "processed_default.jpg");
      }
    }, _callee4, null, [[2, 5]]);
  }));
  return _downloadImage.apply(this, arguments);
}
var downloadFolder = path.join(__dirname, "../../../public/images/products");
if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder, {
    recursive: true
  });
}
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var category_id, products, productImages, usedSlugs, _i2, _Object$entries2, _Object$entries2$_i, brand, id, _yield$queryInterface, _yield$queryInterface2, results, index, _iterator, _step, phone, brand_id, filename, localImage, slug, product, inserted, insertedProducts, _iterator2, _step2, prod, sourcePath, extraCount, i, extraFilename, extraPath, _t, _t2, _t3;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            category_id = 2;
            products = [];
            productImages = [];
            usedSlugs = new Set(); // Dùng chung trong suốt quá trình seed
            console.log("🧹 Xoá dữ liệu cũ...");
            _context.n = 1;
            return queryInterface.bulkDelete("product_images", null, {});
          case 1:
            _context.n = 2;
            return queryInterface.bulkDelete("products", null, {});
          case 2:
            console.log("🔍 Kiểm tra và thêm brands nếu thiếu...");
            _i2 = 0, _Object$entries2 = Object.entries(brandMap);
          case 3:
            if (!(_i2 < _Object$entries2.length)) {
              _context.n = 8;
              break;
            }
            _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), brand = _Object$entries2$_i[0], id = _Object$entries2$_i[1];
            _context.n = 4;
            return queryInterface.sequelize.query("SELECT COUNT(*) as count FROM brands WHERE name = :name", {
              replacements: {
                name: brand
              },
              type: Sequelize.QueryTypes.SELECT
            });
          case 4:
            _yield$queryInterface = _context.v;
            _yield$queryInterface2 = _slicedToArray(_yield$queryInterface, 1);
            results = _yield$queryInterface2[0];
            if (!(parseInt(results.count) === 0)) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return queryInterface.bulkInsert("brands", [{
              name: brand,
              description: "Th\u01B0\u01A1ng hi\u1EC7u ".concat(brand),
              logo_url: "default_logo_url",
              website_url: "default_website_url",
              created_at: new Date(),
              updated_at: new Date()
            }]);
          case 5:
            console.log("\u2795 \u0110\xE3 th\xEAm brand m\u1EDBi: ".concat(brand));
            _context.n = 7;
            break;
          case 6:
            console.log("\u2705 Brand \u0111\xE3 t\u1ED3n t\u1EA1i, b\u1ECF qua: ".concat(brand));
          case 7:
            _i2++;
            _context.n = 3;
            break;
          case 8:
            console.log("📦 Bắt đầu thêm sản phẩm...");
            index = 0;
            _iterator = _createForOfIteratorHelper(phones);
            _context.p = 9;
            _iterator.s();
          case 10:
            if ((_step = _iterator.n()).done) {
              _context.n = 15;
              break;
            }
            phone = _step.value;
            brand_id = getBrandIdFromName(phone.name);
            if (brand_id) {
              _context.n = 11;
              break;
            }
            return _context.a(3, 14);
          case 11:
            filename = "".concat(removeVietnameseTones(phone.name), "_").concat(crypto.randomUUID());
            _context.n = 12;
            return downloadImage(phone.image, filename);
          case 12:
            localImage = _context.v;
            _context.n = 13;
            return generateSlug(phone.name, queryInterface, usedSlugs);
          case 13:
            slug = _context.v;
            product = {
              name: phone.name,
              description: "S\u1EA3n ph\u1EA9m ".concat(phone.name, " ch\xEDnh h\xE3ng, b\u1EA3o h\xE0nh 12 th\xE1ng."),
              price: Math.floor(Math.random() * (4500000 - 2000000) + 2000000),
              stock: Math.floor(Math.random() * (300 - 50) + 50),
              category_id: category_id,
              brand_id: brand_id,
              slug: slug,
              product_image: localImage,
              created_at: new Date(),
              updated_at: new Date()
            };
            products.push(product);
            index++;
            if (index % 10 === 0) console.log("\u2705 \u0110\xE3 x\u1EED l\xFD ".concat(index, " s\u1EA3n ph\u1EA9m"));
          case 14:
            _context.n = 10;
            break;
          case 15:
            _context.n = 17;
            break;
          case 16:
            _context.p = 16;
            _t = _context.v;
            _iterator.e(_t);
          case 17:
            _context.p = 17;
            _iterator.f();
            return _context.f(17);
          case 18:
            console.log("🛒 Chèn dữ liệu vào bảng products...");
            _context.n = 19;
            return queryInterface.bulkInsert("products", products, {});
          case 19:
            _context.n = 20;
            return queryInterface.sequelize.query("SELECT id, product_image FROM products;");
          case 20:
            inserted = _context.v;
            insertedProducts = inserted[0];
            _iterator2 = _createForOfIteratorHelper(insertedProducts);
            _context.p = 21;
            _iterator2.s();
          case 22:
            if ((_step2 = _iterator2.n()).done) {
              _context.n = 29;
              break;
            }
            prod = _step2.value;
            sourcePath = path.join(downloadFolder, prod.product_image);
            extraCount = Math.floor(Math.random() * 3) + 1;
            i = 0;
          case 23:
            if (!(i < extraCount)) {
              _context.n = 28;
              break;
            }
            extraFilename = "processed_".concat(prod.id, "_").concat(i + 1, "_").concat(crypto.randomUUID(), ".jpg");
            extraPath = path.join(downloadFolder, extraFilename);
            _context.p = 24;
            _context.n = 25;
            return copyFile(sourcePath, extraPath);
          case 25:
            productImages.push({
              product_id: prod.id,
              image_url: extraFilename,
              created_at: new Date(),
              updated_at: new Date()
            });
            _context.n = 27;
            break;
          case 26:
            _context.p = 26;
            _t2 = _context.v;
            console.error("\u274C L\u1ED7i sao ch\xE9p \u1EA3nh ph\u1EE5 cho ".concat(prod.id, ": ").concat(_t2.message));
          case 27:
            i++;
            _context.n = 23;
            break;
          case 28:
            _context.n = 22;
            break;
          case 29:
            _context.n = 31;
            break;
          case 30:
            _context.p = 30;
            _t3 = _context.v;
            _iterator2.e(_t3);
          case 31:
            _context.p = 31;
            _iterator2.f();
            return _context.f(31);
          case 32:
            _context.n = 33;
            return queryInterface.bulkInsert("product_images", productImages, {});
          case 33:
            console.log("✅ Seeder chạy hoàn tất!");
          case 34:
            return _context.a(2);
        }
      }, _callee, null, [[24, 26], [21, 30, 31, 32], [9, 16, 17, 18]]);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return queryInterface.bulkDelete("product_images", null, {});
          case 1:
            _context2.n = 2;
            return queryInterface.bulkDelete("products", null, {});
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  }
};