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
var usersSevices = require("../../services/userServices/users.service");
var _require = require("../../utils/url"),
  url = _require.url;
var _require2 = require("../../models/index"),
  User = _require2.User,
  UserInfo = _require2.UserInfo,
  Provider = _require2.Provider;
module.exports = {
  index: function () {
    var _index = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res, next) {
      var userAll, employee, userNumber, users, employeeNumber, employees, successMessage, errorMessage, warningMessage, host;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return usersSevices.getUsersByStatus_Admin_or_client(false);
          case 1:
            userAll = _context.v;
            _context.n = 2;
            return usersSevices.getUsersByStatus_Admin_or_client(true);
          case 2:
            employee = _context.v;
            userNumber = userAll.count, users = userAll.rows;
            employeeNumber = employee.count, employees = employee.rows;
            successMessage = req.flash('success');
            errorMessage = req.flash('errors');
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            return _context.a(2, res.render("users/users", {
              userNumber: userNumber,
              employees: employees,
              employeeNumber: employeeNumber,
              users: users,
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              nav: true,
              categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]]
            }));
        }
      }, _callee);
    }));
    function index(_x, _x2, _x3) {
      return _index.apply(this, arguments);
    }
    return index;
  }(),
  handleDeleteUser: function () {
    var _handleDeleteUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var id, user, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            id = req.params.id;
            _context2.n = 1;
            return User.findByPk(id);
          case 1:
            user = _context2.v;
            _context2.n = 2;
            return user.destroy();
          case 2:
            req.flash("success", "Xóa người dùng thành công");
            return _context2.a(2, res.redirect("/admin/v1/users"));
          case 3:
            _context2.p = 3;
            _t = _context2.v;
            req.flash("error", "Xóa người dùng thất bại vui lòng thử lại sau!");
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    function handleDeleteUser(_x4, _x5) {
      return _handleDeleteUser.apply(this, arguments);
    }
    return handleDeleteUser;
  }(),
  add: function () {
    var _add = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var successMessage, errorMessage, warningMessage, host, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            successMessage = req.flash('success');
            errorMessage = req.flash('errors');
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            return _context3.a(2, res.render("users/create", {
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              nav: true,
              req: req,
              categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]]
            }));
          case 1:
            _context3.p = 1;
            _t2 = _context3.v;
          case 2:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 1]]);
    }));
    function add(_x6, _x7) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  edit: function () {
    var _edit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var successMessage, errorMessage, warningMessage, host, user, userInfo, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            successMessage = req.flash("success");
            errorMessage = req.flash("errors");
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            _context4.p = 1;
            _context4.n = 2;
            return User.findOne({
              where: {
                id: req.params.id
              },
              include: [{
                model: UserInfo,
                // Dùng đúng tên model
                as: "userInfo" // Phải khớp với alias trong `User.js`
              }]
            });
          case 2:
            user = _context4.v;
            if (user) {
              _context4.n = 3;
              break;
            }
            return _context4.a(2, res.status(404).send("User not found"));
          case 3:
            // Nếu không có userInfo, tạo một đối tượng rỗng để tránh lỗi khi render EJS
            userInfo = user.userInfo || {
              user_email: "",
              user_phone: "",
              user_location: ""
            };
            res.render("users/edit", {
              user: user,
              userInfo: userInfo,
              // Truyền userInfo vào EJS
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              nav: true,
              req: req,
              categories: [["Danh sách người dùng", "".concat(host, "/")], ["Tạo mới người dùng", "".concat(host, "/add")], ["Nhà cung cấp sản phẩm", "".concat(host, "/suppliers")]]
            });
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t3 = _context4.v;
            console.error(_t3);
            req.flash("error", "Có lỗi xảy ra, vui lòng thử lại!");
            return _context4.a(2, res.redirect("/admin/v1/users/edit/".concat(req.params.id)));
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    function edit(_x8, _x9) {
      return _edit.apply(this, arguments);
    }
    return edit;
  }(),
  /**
   * Xử lý cập nhật người dùng
   */
  handleEdit: function () {
    var _handleEdit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var _req$body, name, username, email, phone, location, status, userId, user, userInfo, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            console.log("Bắt đầu cập nhật thông tin người dùng...");
            _req$body = req.body, name = _req$body.name, username = _req$body.username, email = _req$body.email, phone = _req$body.phone, location = _req$body.location, status = _req$body.status;
            userId = req.params.id;
            _context5.n = 1;
            return User.findByPk(userId);
          case 1:
            user = _context5.v;
            if (user) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, res.status(404).send("User not found"));
          case 2:
            _context5.n = 3;
            return user.update({
              name: name,
              username: username,
              status: status
            });
          case 3:
            _context5.n = 4;
            return UserInfo.findOne({
              where: {
                user_id: userId
              }
            });
          case 4:
            userInfo = _context5.v;
            if (!userInfo) {
              _context5.n = 6;
              break;
            }
            _context5.n = 5;
            return userInfo.update({
              user_email: email,
              user_phone: phone,
              user_location: location
            });
          case 5:
            _context5.n = 7;
            break;
          case 6:
            _context5.n = 7;
            return UserInfo.create({
              user_id: userId,
              user_email: email,
              user_phone: phone,
              user_location: location
            });
          case 7:
            req.flash("success", "Cập nhật thông tin thành công");
            return _context5.a(2, res.redirect("/admin/v1/users/edit/".concat(userId)));
          case 8:
            _context5.p = 8;
            _t4 = _context5.v;
            console.error(_t4);
            req.flash("error", "Cập nhật thông tin thất bại, vui lòng thử lại sau!");
            return _context5.a(2, res.redirect("/admin/v1/users/edit/".concat(req.params.id)));
        }
      }, _callee5, null, [[0, 8]]);
    }));
    function handleEdit(_x0, _x1) {
      return _handleEdit.apply(this, arguments);
    }
    return handleEdit;
  }(),
  handleUsers: function () {
    var _handleUsers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res, next) {
      var body, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            body = req.body;
            _context6.p = 1;
            if (!(!body.name || !body.username || !body.password)) {
              _context6.n = 2;
              break;
            }
            req.flash("warning", "Vui lòng nhập đủ các trường!");
            return _context6.a(2, res.redirect("/admin/v1/users/add"));
          case 2:
            _context6.n = 3;
            return usersSevices.createUserByAdmin(body).then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                user = _ref2[0],
                created = _ref2[1];
              if (created) {
                req.flash("success", "Thêm người dùng thành công");
                return res.redirect("/admin/v1/users/add");
              } else {
                req.flash("error", "người dùng đã tồn tại");
                return res.redirect("/admin/v1/users/add");
              }
            });
          case 3:
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t5 = _context6.v;
            console.log(_t5);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 4]]);
    }));
    function handleUsers(_x10, _x11, _x12) {
      return _handleUsers.apply(this, arguments);
    }
    return handleUsers;
  }(),
  suppliers: function () {
    var _suppliers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
      var successMessage, errorMessage, warningMessage, host;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            successMessage = req.flash('success');
            errorMessage = req.flash('errors');
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            return _context7.a(2, res.render("users/supplier", {
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              nav: true,
              req: req,
              categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]]
            }));
        }
      }, _callee7);
    }));
    function suppliers(_x13, _x14) {
      return _suppliers.apply(this, arguments);
    }
    return suppliers;
  }(),
  handleSupplier: function () {
    var _handleSupplier = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
      var body, _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            body = req.body;
            _context8.p = 1;
            if (body) {
              _context8.n = 2;
              break;
            }
            req.flash("warning", "Vui lòng nhập đủ các trường!");
            return _context8.a(2, res.redirect("/admin/v1/users/suppliers"));
          case 2:
            _context8.n = 3;
            return usersSevices.creatNewSupliers(body).then(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                suppliers = _ref4[0],
                created = _ref4[1];
              if (created) {
                req.flash("success", "Đã thêm mới nhà cung cấp");
                return res.redirect("/admin/v1/users/suppliers");
              } else {
                req.flash("error", "Nhà cung cấp đã tồn tại");
                return res.redirect("/admin/v1/users/suppliers");
              }
            });
          case 3:
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t6 = _context8.v;
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 4]]);
    }));
    function handleSupplier(_x15, _x16) {
      return _handleSupplier.apply(this, arguments);
    }
    return handleSupplier;
  }()
};