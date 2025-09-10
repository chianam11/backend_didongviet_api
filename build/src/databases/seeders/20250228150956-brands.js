'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var brands, insertList, _i, _brands, brand, _yield$queryInterface, _yield$queryInterface2, existing;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            brands = [{
              name: "Apple",
              description: "Thương hiệu nổi tiếng với các sản phẩm như iPhone, iPad, MacBook, Apple Watch.",
              logo_url: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202272249",
              website_url: "https://www.apple.com"
            }, {
              name: "Samsung",
              description: "Tập đoàn công nghệ hàng đầu Hàn Quốc, sản xuất điện thoại, TV, thiết bị điện tử.",
              logo_url: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/256_144_4.png",
              website_url: "https://www.samsung.com"
            }, {
              name: "Xiaomi",
              description: "Thương hiệu Trung Quốc chuyên điện thoại, thiết bị nhà thông minh và phụ kiện.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
              website_url: "https://www.mi.com"
            }, {
              name: "OPPO",
              description: "Thương hiệu điện thoại Trung Quốc nổi bật với camera selfie và sạc nhanh.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/OPPO_LOGO_2019.svg",
              website_url: "https://www.oppo.com"
            }, {
              name: "Vivo",
              description: "Hãng điện thoại Trung Quốc nổi tiếng với công nghệ âm thanh và camera.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Vivo_logo_2019.svg",
              website_url: "https://www.vivo.com"
            }, {
              name: "Realme",
              description: "Hãng con của OPPO, chuyên sản xuất điện thoại cấu hình tốt giá rẻ.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Realme_logo.png",
              website_url: "https://www.realme.com"
            }, {
              name: "Nokia",
              description: "Hãng điện thoại Phần Lan nổi tiếng một thời với các dòng điện thoại bền bỉ.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nokia_wordmark.svg",
              website_url: "https://www.nokia.com"
            }, {
              name: "ASUS",
              description: "Hãng công nghệ Đài Loan nổi tiếng với laptop, linh kiện máy tính và điện thoại.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/AsusTek_Computer_Logo.svg",
              website_url: "https://www.asus.com"
            }, {
              name: "Lenovo",
              description: "Thương hiệu máy tính hàng đầu Trung Quốc, nổi bật với dòng ThinkPad và Yoga.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lenovo_logo_2015.svg",
              website_url: "https://www.lenovo.com"
            }, {
              name: "Sony",
              description: "Hãng công nghệ Nhật Bản sản xuất điện thoại, TV, máy ảnh và tai nghe.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sony_Logo.svg",
              website_url: "https://www.sony.com"
            }, {
              name: "Edifier",
              description: "Hãng chuyên về loa và tai nghe chất lượng cao từ Trung Quốc.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Edifier_logo.svg",
              website_url: "https://www.edifier.com"
            }, {
              name: "Boya",
              description: "Thương hiệu micro chuyên nghiệp cho thu âm, podcast và livestream.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Boya_logo.png",
              website_url: "https://www.boya-mic.com"
            }, {
              name: "Acefast",
              description: "Thương hiệu phụ kiện công nghệ trẻ trung với thiết kế hiện đại.",
              logo_url: "https://www.acefast.com/uploadfile/2022/0621/20220621024100733.png",
              website_url: "https://www.acefast.com"
            }, {
              name: "RiverSong",
              description: "Thương hiệu đồng hồ thông minh và phụ kiện công nghệ giá tốt.",
              logo_url: "https://riversongtech.com/wp-content/uploads/2020/10/Riversong-logo-01.png",
              website_url: "https://riversongtech.com"
            }, {
              name: "Infinix",
              description: "Hãng điện thoại Trung Quốc phổ biến ở thị trường mới nổi.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Infinix_logo.svg",
              website_url: "https://www.infinixmobility.com"
            }, {
              name: "Itel",
              description: "Thương hiệu điện thoại giá rẻ thuộc tập đoàn Transsion.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Itel_logo.svg",
              website_url: "https://www.itel-mobile.com"
            }, {
              name: "Mobell",
              description: "Hãng điện thoại giá rẻ và điện thoại cơ bản tại Việt Nam.",
              logo_url: "https://mobell.vn/themes/mobell/assets/images/logo.png",
              website_url: "https://mobell.vn"
            }, {
              name: "MSI",
              description: "Hãng máy tính và linh kiện gaming nổi tiếng từ Đài Loan.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Msi-Logo.svg",
              website_url: "https://www.msi.com"
            }, {
              name: "Razer",
              description: "Thương hiệu gaming gear và laptop nổi bật với thiết kế đậm chất game thủ.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Razer_wordmark_green.svg",
              website_url: "https://www.razer.com"
            }, {
              name: "Amazon",
              description: "Thương hiệu nổi tiếng với các sản phẩm Kindle.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              website_url: "https://www.amazon.com"
            }, {
              name: "Anker",
              description: "Hãng nổi tiếng với các sản phẩm phụ kiện, loa và tai nghe.",
              logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Anker_logo_2019.svg",
              website_url: "https://www.anker.com"
            }, {
              name: "Loa",
              description: "Thương hiệu chuyên loa và thiết bị âm thanh.",
              logo_url: "https://some-logo-url.com",
              website_url: "https://some-brand-url.com"
            }];
            insertList = [];
            _i = 0, _brands = brands;
          case 1:
            if (!(_i < _brands.length)) {
              _context.n = 4;
              break;
            }
            brand = _brands[_i];
            _context.n = 2;
            return queryInterface.sequelize.query("SELECT COUNT(*) AS count FROM brands WHERE name = :name", {
              replacements: {
                name: brand.name
              },
              type: Sequelize.QueryTypes.SELECT
            });
          case 2:
            _yield$queryInterface = _context.v;
            _yield$queryInterface2 = _slicedToArray(_yield$queryInterface, 1);
            existing = _yield$queryInterface2[0];
            if (parseInt(existing.count) === 0) {
              insertList.push(_objectSpread(_objectSpread({}, brand), {}, {
                created_at: new Date(),
                updated_at: new Date()
              }));
              console.log("\u2795 Th\xEAm brand: ".concat(brand.name));
            } else {
              console.log("\u2705 \u0110\xE3 t\u1ED3n t\u1EA1i brand: ".concat(brand.name));
            }
          case 3:
            _i++;
            _context.n = 1;
            break;
          case 4:
            if (!(insertList.length > 0)) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return queryInterface.bulkInsert('brands', insertList);
          case 5:
            _context.n = 7;
            break;
          case 6:
            console.log("⚠️ Không có brand nào được thêm.");
          case 7:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return queryInterface.bulkDelete('brands', null, {});
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  }
};