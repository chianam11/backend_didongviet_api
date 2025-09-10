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
var _require = require("../../utils/url"),
  url = _require.url;
var _require2 = require("../../models/index"),
  Role = _require2.Role,
  Permission = _require2.Permission,
  User = _require2.User;
var _require3 = require("yup"),
  string = _require3.string;
var _require4 = require("../../utils/permission"),
  isPermission = _require4.isPermission;
module.exports = {
  index: function () {
    var _index = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var id, successMessage, errorMessage, errorElements, warningMessage, host, roles, cleanData;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            id = req.params.id;
            successMessage = req.flash('success');
            errorMessage = req.flash('error');
            errorElements = req.errors;
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            _context.n = 1;
            return Role.findAll({
              include: [{
                model: Permission,
                as: "permissions",
                through: {
                  attributes: []
                },
                // Ẩn bảng trung gian
                raw: true
              }]
            });
          case 1:
            roles = _context.v;
            cleanData = roles.map(function (p) {
              return p.get({
                plain: true
              });
            });
            res.render("roles/roles", {
              layout: true,
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              errorElements: errorElements,
              nav: true,
              categories: [["Tạo quyền hạn", url(host, "/roles/add")]],
              req: req,
              roles: roles,
              id: id
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    function index(_x, _x2) {
      return _index.apply(this, arguments);
    }
    return index;
  }(),
  handleDelete: function () {
    var _handleDelete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var id, role, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            id = req.params.id;
            _context2.n = 1;
            return Role.findByPk(id, {
              include: [{
                model: Permission,
                as: "permissions"
              }, {
                model: User,
                as: "users"
              }]
            });
          case 1:
            role = _context2.v;
            _context2.n = 2;
            return role.removePermissions(role.permissions);
          case 2:
            _context2.n = 3;
            return role.removeUsers(role.users);
          case 3:
            _context2.n = 4;
            return role.destroy();
          case 4:
            //Xóa dữ liệu bảng roles 
            req.flash("success", "Xóa quyền thành công");
            return _context2.a(2, res.redirect("/admin/v1/roles"));
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            res.json(_t);
            req.flash("error", "Xóa quyền thất bại vui lòng thử lại sau");
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 5]]);
    }));
    function handleDelete(_x3, _x4) {
      return _handleDelete.apply(this, arguments);
    }
    return handleDelete;
  }(),
  add: function add(req, res) {
    var successMessage = req.flash('success');
    var errorMessage = req.flash('error');
    var errorElements = req.errors;
    var warningMessage = req.flash("warning");
    var host = process.env.HOST + req.baseUrl;
    res.render("roles/add", {
      layout: true,
      successMessage: successMessage,
      errorMessage: errorMessage,
      warningMessage: warningMessage,
      errorElements: errorElements,
      nav: true,
      categories: [["Danh sách quyền", url(host, "/roles")]],
      req: req
    });
  },
  handleAdd: function () {
    var _handleAdd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var validateBody, _req$body, name, permissions, description, role, permissionInstances, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return req.validate(req.body, {
              name: string().required("Vui lòng nhập tên quyền").max(255, "vui lòng không nhập tên Role quá 255 ký tự")
            });
          case 1:
            validateBody = _context4.v;
            _req$body = req.body, name = _req$body.name, permissions = _req$body.permissions, description = _req$body.description;
            if (name) {
              _context4.n = 2;
              break;
            }
            req.flash("msg", "Vui lòng nhập tên vai trò");
            return _context4.a(2, res.redirect("/admin/v1/roles"));
          case 2:
            if (!permissions) {
              permissions = [];
            }
            permissions = Array.isArray(permissions) ? permissions : [permissions];
            _context4.n = 3;
            return Role.create({
              name: name,
              description: description
            });
          case 3:
            role = _context4.v;
            if (!(role && permissions.length)) {
              _context4.n = 6;
              break;
            }
            _context4.n = 4;
            return Promise.all(permissions.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(value) {
                var _yield$Permission$fin, _yield$Permission$fin2, permissionInstance;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _context3.n = 1;
                      return Permission.findOrCreate({
                        where: {
                          name: value.trim()
                        },
                        defaults: {
                          name: value.trim()
                        }
                      });
                    case 1:
                      _yield$Permission$fin = _context3.v;
                      _yield$Permission$fin2 = _slicedToArray(_yield$Permission$fin, 1);
                      permissionInstance = _yield$Permission$fin2[0];
                      return _context3.a(2, permissionInstance);
                  }
                }, _callee3);
              }));
              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 4:
            permissionInstances = _context4.v;
            _context4.n = 5;
            return role.addPermissions(permissionInstances);
          case 5:
            req.flash("success", "Tạo quyền thành công");
          case 6:
            return _context4.a(2, res.redirect("/admin/v1/roles"));
          case 7:
            _context4.p = 7;
            _t2 = _context4.v;
            if (_t2.errors) {
              req.flash("error", "Tên quyền đã tồn tại!");
            }
            res.redirect("/admin/v1/roles");
          case 8:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 7]]);
    }));
    function handleAdd(_x5, _x6) {
      return _handleAdd.apply(this, arguments);
    }
    return handleAdd;
  }(),
  edit: function () {
    var _edit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var successMessage, errorMessage, errorElements, warningMessage, host, id, roleData, checkrole, role;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            successMessage = req.flash('success');
            errorMessage = req.flash('error');
            errorElements = req.errors;
            warningMessage = req.flash("warning");
            host = process.env.HOST + req.baseUrl;
            id = req.params.id; // Truy vấn Role với dữ liệu permissions và role_permissions
            _context5.n = 1;
            return Role.findByPk(id, {
              include: [{
                model: Permission,
                as: "permissions",
                raw: false // Đảm bảo raw: false để nhận được đầy đủ thông tin chi tiết
              }]
            });
          case 1:
            roleData = _context5.v;
            // Kiểm tra dữ liệu trả về
            checkrole = JSON.stringify(roleData, null, 2); // Dễ dàng xem dữ liệu trả về
            role = JSON.parse(checkrole);
            res.render("roles/edit", {
              role: role,
              isPermission: isPermission,
              layout: true,
              successMessage: successMessage,
              errorMessage: errorMessage,
              warningMessage: warningMessage,
              errorElements: errorElements,
              nav: true,
              categories: [["Tạo quyền", url(host, "/add")]]
            });
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    function edit(_x8, _x9) {
      return _edit.apply(this, arguments);
    }
    return edit;
  }(),
  handleEdit: function () {
    var _handleEdit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
      var id, _req$body2, name, permissions, role, permissionInstances;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, permissions = _req$body2.permissions;
            if (name) {
              _context7.n = 1;
              break;
            }
            req.flash("msg", "Vui lòng nhập tên vai trò");
            return _context7.a(2, res.redirect("/roles/edit/" + id));
          case 1:
            if (!permissions) {
              permissions = [];
            }
            permissions = Array.isArray(permissions) ? permissions : [permissions];
            _context7.n = 2;
            return Role.update({
              name: name
            }, {
              where: {
                id: id
              }
            });
          case 2:
            _context7.n = 3;
            return Role.findByPk(id);
          case 3:
            role = _context7.v;
            if (!(role && permissions.length)) {
              _context7.n = 6;
              break;
            }
            _context7.n = 4;
            return Promise.all(permissions.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(value) {
                var _yield$Permission$fin3, _yield$Permission$fin4, permissionInstance;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      _context6.n = 1;
                      return Permission.findOrCreate({
                        where: {
                          name: value.trim()
                        },
                        defaults: {
                          name: value.trim()
                        }
                      });
                    case 1:
                      _yield$Permission$fin3 = _context6.v;
                      _yield$Permission$fin4 = _slicedToArray(_yield$Permission$fin3, 1);
                      permissionInstance = _yield$Permission$fin4[0];
                      return _context6.a(2, permissionInstance);
                  }
                }, _callee6);
              }));
              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 4:
            permissionInstances = _context7.v;
            _context7.n = 5;
            return role.setPermissions(permissionInstances);
          case 5:
            req.flash("success", "Cập nhật thành công");
          case 6:
            return _context7.a(2, res.redirect("/admin/v1/roles/edit/" + id));
        }
      }, _callee7);
    }));
    function handleEdit(_x0, _x1) {
      return _handleEdit.apply(this, arguments);
    }
    return handleEdit;
  }()
};