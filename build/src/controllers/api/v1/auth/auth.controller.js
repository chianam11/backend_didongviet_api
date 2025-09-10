"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("../../../../helpers/response"),
  successResponse = _require.successResponse,
  errorResponse = _require.errorResponse;
var _require2 = require("../../../../models/index"),
  User = _require2.User,
  UserToken = _require2.UserToken,
  Blacklist = _require2.Blacklist;
var bcrypt = require('bcrypt');
var _require3 = require("../../../../utils/jwt"),
  createAccessToken = _require3.createAccessToken,
  createRefreshToken = _require3.createRefreshToken;
module.exports = {
  login: function () {
    var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var _req$body, username, password, user, isMatch, accessToken, refreshToken, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password; // Kiểm tra thiếu trường
            if (!(!username || !password)) {
              _context.n = 1;
              break;
            }
            return _context.a(2, errorResponse(res, 400, "Username and password are required"));
          case 1:
            _context.n = 2;
            return User.findOne({
              where: {
                username: username
              }
            });
          case 2:
            user = _context.v;
            if (user) {
              _context.n = 3;
              break;
            }
            return _context.a(2, errorResponse(res, 401, "User not found"));
          case 3:
            _context.n = 4;
            return bcrypt.compare(password, user.password);
          case 4:
            isMatch = _context.v;
            if (isMatch) {
              _context.n = 5;
              break;
            }
            return _context.a(2, errorResponse(res, 401, "Invalid credentials"));
          case 5:
            // Tạo access & refresh token
            accessToken = createAccessToken({
              userId: user.id
            });
            refreshToken = createRefreshToken(); // Lưu refresh token
            _context.n = 6;
            return UserToken.create({
              user_id: user.id,
              token: refreshToken
            });
          case 6:
            // Gửi access token qua cookie
            res.cookie("token", accessToken, {
              httpOnly: true,
              secure: false,
              // Bật true nếu dùng HTTPS
              sameSite: "lax",
              maxAge: 24 * 60 * 60 * 1000 // 1 ngày
            });
            return _context.a(2, successResponse(res, 200, "Login successful", {
              accessToken: accessToken,
              refreshToken: refreshToken,
              user: {
                user_id: user.id,
                name: user.name
              }
            }));
          case 7:
            _context.p = 7;
            _t = _context.v;
            console.error("Login error:", _t);
            return _context.a(2, errorResponse(res, 500, "Internal server error"));
        }
      }, _callee, null, [[0, 7]]);
    }));
    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }
    return login;
  }(),
  register: function () {
    var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var _req$body2, name, username, password, confirmPassword, user, hashedPassword, newUser, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            _req$body2 = req.body, name = _req$body2.name, username = _req$body2.username, password = _req$body2.password, confirmPassword = _req$body2.confirmPassword;
            _context2.n = 1;
            return User.findOne({
              where: {
                username: username
              }
            });
          case 1:
            user = _context2.v;
            if (!user) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, errorResponse(res, 400, "Username already exists"));
          case 2:
            if (!(password !== confirmPassword)) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, errorResponse(res, 400, "Passwords do not match"));
          case 3:
            _context2.n = 4;
            return bcrypt.hash(password, 10);
          case 4:
            hashedPassword = _context2.v;
            _context2.n = 5;
            return User.create({
              name: name,
              username: username,
              password: hashedPassword
            });
          case 5:
            newUser = _context2.v;
            return _context2.a(2, successResponse(res, 200, "ok"));
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            console.error("Register error:", _t2);
            return _context2.a(2, errorResponse(res, 500, "Internal server error"));
        }
      }, _callee2, null, [[0, 6]]);
    }));
    function register(_x3, _x4) {
      return _register.apply(this, arguments);
    }
    return register;
  }(),
  profile: function () {
    var _profile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            return _context3.a(2, successResponse(res, 200, "Success", req.user));
        }
      }, _callee3);
    }));
    function profile(_x5, _x6) {
      return _profile.apply(this, arguments);
    }
    return profile;
  }(),
  logout: function () {
    var _logout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var _req$user, accessToken, exp, _yield$Blacklist$find, _yield$Blacklist$find2, blacklist;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _req$user = req.user, accessToken = _req$user.accessToken, exp = _req$user.exp;
            _context4.n = 1;
            return Blacklist.findOrCreate({
              where: {
                token: accessToken
              },
              defaults: {
                token: accessToken,
                expired: exp
              }
            });
          case 1:
            _yield$Blacklist$find = _context4.v;
            _yield$Blacklist$find2 = _slicedToArray(_yield$Blacklist$find, 1);
            blacklist = _yield$Blacklist$find2[0];
            if (!blacklist) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, successResponse(res, 200, "Success"));
          case 2:
            return _context4.a(2, errorResponse(res, 500, "Server Error"));
        }
      }, _callee4);
    }));
    function logout(_x7, _x8) {
      return _logout.apply(this, arguments);
    }
    return logout;
  }(),
  refresh: function () {
    var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var refreshToken, storedToken, payload, user, newAccessToken, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            refreshToken = req.cookies.token; // Giả sử bạn lưu refreshToken vào cookie tên là 'token'
            if (refreshToken) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, errorResponse(res, 401, "No refresh token provided"));
          case 1:
            _context5.n = 2;
            return UserToken.findOne({
              where: {
                token: refreshToken
              }
            });
          case 2:
            storedToken = _context5.v;
            if (storedToken) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2, errorResponse(res, 403, "Refresh token not found or invalid"));
          case 3:
            // Giải mã refreshToken
            payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET); // Sử dụng bí mật đúng
            _context5.n = 4;
            return User.findByPk(payload.userId);
          case 4:
            user = _context5.v;
            if (user) {
              _context5.n = 5;
              break;
            }
            return _context5.a(2, errorResponse(res, 404, "User not found"));
          case 5:
            // Tạo mới accessToken
            newAccessToken = createAccessToken({
              userId: user.id
            }); // Gửi accessToken mới dưới dạng cookie
            res.cookie("token", newAccessToken, {
              httpOnly: true,
              secure: false,
              // Đổi thành true nếu bạn dùng HTTPS
              sameSite: "lax",
              maxAge: 15 * 60 * 1000 // 15 phút
            });
            return _context5.a(2, successResponse(res, 200, "Token refreshed", {
              accessToken: newAccessToken
            }));
          case 6:
            _context5.p = 6;
            _t3 = _context5.v;
            console.error("Refresh Token Error:", _t3);
            return _context5.a(2, errorResponse(res, 403, "Invalid refresh token"));
        }
      }, _callee5, null, [[0, 6]]);
    }));
    function refresh(_x9, _x0) {
      return _refresh.apply(this, arguments);
    }
    return refresh;
  }()
};