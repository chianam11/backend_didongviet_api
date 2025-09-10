"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
//Tương ứng với model User
var _require = require("../../models/index"),
  Product = _require.Product,
  ProductImage = _require.ProductImage,
  Brand = _require.Brand,
  Category = _require.Category;
var Repository = require("../../core/repository");
var bcrypt = require('bcrypt');
module.exports = /*#__PURE__*/function (_Repository) {
  function _class() {
    _classCallCheck(this, _class);
    return _callSuper(this, _class, arguments);
  }
  _inherits(_class, _Repository);
  return _createClass(_class, [{
    key: "getModel",
    value: function getModel() {
      return Product;
    }
  }, {
    key: "getAllProduct",
    value: function getAllProduct() {
      return this.findAll({
        include: [{
          model: ProductImage,
          as: "images",
          attributes: ["id", "image_url", "is_primary"]
        }],
        order: [["id", "DESC"], [{
          model: ProductImage,
          as: "images"
        }, "is_primary", "DESC"]]
      }).then(function (products) {
        return products.map(function (product) {
          return product.get({
            plain: true
          });
        });
      });
    }
  }, {
    key: "createProduct",
    value: function createProduct(_ref) {
      var name = _ref.name,
        description = _ref.description,
        price = _ref.price,
        stock = _ref.stock,
        category_id = _ref.category_id,
        brand_id = _ref.brand_id,
        product_image = _ref.product_image,
        product_images = _ref.processedImages;
      return this.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        category_id: category_id,
        brand_id: brand_id,
        product_image: product_image
      });
    }
  }, {
    key: "getProductById",
    value: function getProductById(id) {
      return this.findByPk(id, {
        include: [{
          model: ProductImage,
          as: "images",
          attributes: ["id", "image_url", "is_primary"]
        }]
      });
    }
  }]);
}(Repository);