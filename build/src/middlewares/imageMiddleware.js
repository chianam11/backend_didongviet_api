"use strict";

function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var multer = require("multer");
var sharp = require("sharp");
var path = require("path");
var fs = require("fs");

// Cấu hình multer lưu ảnh vào ổ đĩa
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var uploadPath = "public/images/products";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, {
        recursive: true
      });
    }
    cb(null, uploadPath);
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    var ext = path.extname(file.originalname);
    var name = path.basename(file.originalname, ext);
    cb(null, "".concat(name, "_").concat(uniqueSuffix).concat(ext));
  }
});

// Cấu hình multer với giới hạn kích thước và fileFilter
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
    // Giới hạn 2MB
    files: 10 // Giới hạn 10 file
  },
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Chỉ được phép tải lên tệp tin ảnh!"), false);
    }
  }
});

// Middleware xử lý ảnh bằng Sharp
var middlewareUploadFiles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res, next) {
    var field, _t, _t2, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!(!req.files || Object.keys(req.files).length === 0)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, next());
        case 1:
          _context2.p = 1;
          _t = _regeneratorKeys(req.files);
        case 2:
          if ((_t2 = _t()).done) {
            _context2.n = 4;
            break;
          }
          field = _t2.value;
          _context2.n = 3;
          return Promise.all(req.files[field].map(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(file) {
              var outputDir, filename, outputPath;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    outputDir = "public/images/products";
                    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, {
                      recursive: true
                    });
                    filename = "processed-".concat(Date.now(), "-").concat(file.filename, ".webp");
                    outputPath = path.join(outputDir, filename);
                    _context.n = 1;
                    return sharp(file.path).resize({
                      width: 800,
                      height: 600,
                      fit: "inside",
                      withoutEnlargement: true,
                      kernel: sharp.kernel.lanczos3
                    }).toFormat("webp").toFile(outputPath).then()["catch"](function (err) {
                      return console.error(err);
                    });
                  case 1:
                    fs.unlinkSync(file.path); // Xóa ảnh gốc sau khi xử lý
                    return _context.a(2, {
                      originalname: file.originalname,
                      path: outputPath
                    });
                }
              }, _callee);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 3:
          req.files[field] = _context2.v;
          _context2.n = 2;
          break;
        case 4:
          next();
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t3 = _context2.v;
          next(_t3);
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5]]);
  }));
  return function middlewareUploadFiles(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  upload: upload,
  middlewareUploadFiles: middlewareUploadFiles
};