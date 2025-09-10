"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config(); // Load biến môi trường từ file .env

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressLayouts = require("express-ejs-layouts");
var session = require("express-session");
var flash = require("connect-flash");
var passport = require("passport");
var cors = require("cors");
var methodOverride = require("method-override");

// Middleware và route
var validate = require("./middlewares/validate");
var sanitizeMiddleware = require("./middlewares/sanitizeMiddleware");
var authMiddleware = require("./middlewares/auth/auth.middleware");
var passportLocal = require("./passports/passport.local");

// Routes
var indexRouter = require("./routes/index");
var authentication = require("./routes/v1/auth/auth");
var usersRouter = require("./routes/v1/users/users.router");
var rolesRouter = require("./routes/v1/roles/roles.router");
var productRouter = require("./routes/v1/products/products.router");
var clientApi = require("./routes/api/index");

// Sequelize models
var _require = require("./models/index"),
  User = _require.User;

// Khởi tạo ứng dụng Express
var app = express();

// === CẤU HÌNH CƠ BẢN ===
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// === MIDDLEWARE CƠ BẢN ===
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

// === CẤU HÌNH SESSION & FLASH ===
app.use(session({
  secret: process.env.SESSION_SECRET || "default-secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000
  } // 1 giờ
}));
app.use(flash());
// === CẤU HÌNH PASSPORT ===
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", passportLocal);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, done) {
    var user, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return User.findByPk(id);
        case 1:
          user = _context.v;
          done(null, user);
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          done(_t, null);
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
// === CẤU HÌNH CORS ===
var _process$env = process.env,
  CLIENT = _process$env.CLIENT,
  SERVER = _process$env.SERVER,
  NODE_ENV = _process$env.NODE_ENV;
var whitelist = [CLIENT, SERVER].filter(Boolean); // loại bỏ undefined hoặc chuỗi rỗng
var corsOptions = {
  origin: function origin(_origin, callback) {
    // Nếu đang ở môi trường development → cho phép mọi origin
    if (NODE_ENV === 'development') {
      callback(null, true);
    }
    // Nếu không có origin (ví dụ như từ Postman) → cho phép
    else if (!_origin || whitelist.includes(_origin)) {
      callback(null, true);
    }
    // Ngược lại, chặn CORS
    else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};
app.use(cors(corsOptions));
app.use("/no-sleep", function (req, res) {
  return res.json("ok").status(200);
});
// === ROUTES ===
clientApi(app);
// Auth routes (không cần middleware bảo vệ)
authentication(app);
app.use("/", indexRouter);
// Middleware validate & sanitize chỉ cho API
app.use("/v1", validate, sanitizeMiddleware);
// Các route cần bảo vệ bằng authMiddleware
usersRouter(app);
rolesRouter(app);
productRouter(app);
// === XỬ LÝ LỖI 404 ===
app.use(function (req, res, next) {
  res.status(404).render("notFound", {
    layout: false
  });
});
// === XỬ LÝ LỖI CHUNG ===
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({
    error: err.message
  });
});
module.exports = app;