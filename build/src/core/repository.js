"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//Base Repository
module.exports = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
    this.model = this.getModel();
  }
  return _createClass(_class, [{
    key: "create",
    value: function create(data) {
      //Gọi hàm model
      return this.model.create(data);
    }
  }, {
    key: "update",
    value: function update() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var condition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      //Gọi hàm model
      return this.model.update(data, condition, r);
    }
  }, {
    key: "updateByPk",
    value: function updateByPk(id) {
      //Gọi hàm model
      return this.model.update(data, {
        where: {
          id: id
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //Gọi hàm model
      return this.model.destroy(condition);
    }
  }, {
    key: "deleteByPk",
    value: function deleteByPk(id) {
      //Gọi hàm model
      return this.model.destroy({
        where: {
          id: id
        }
      });
    }
  }, {
    key: "find",
    value: function find() {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //Gọi hàm model
      return this.model.findOne(condition);
    }
  }, {
    key: "findByPk",
    value: function findByPk(id) {
      var condition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      //Gọi hàm model
      return this.model.findByPk(id, condition);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //Gọi hàm model
      return this.model.findAll(options);
    }
  }, {
    key: "findAndCountAll",
    value: function findAndCountAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.model.findAndCountAll(options);
    }
  }, {
    key: "findOrCreate",
    value: function findOrCreate() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.model.findOrCreate(options);
    }
  }]);
}();