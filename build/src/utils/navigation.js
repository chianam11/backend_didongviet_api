"use strict";

var _require = require("./url"),
  url = _require.url;
function getNavigation(host) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var menus = {
    products: [["Tạo mới sản phẩm", url(host, "/add")], ["Danh sách đơn hàng", url(host, "/order")], ["Đơn hàng chưa xác nhận", url(host, "/new-order")], ["Đơn hàng đã giao", url(host, "/completed-order")], ["Đơn hàng bị hủy", url(host, "/voided-order")]],
    dashboard: [["Thống kê doanh thu", url(host, "/revenue")], ["Báo cáo hàng tồn", url(host, "/inventory")]],
    orders: [["Tất cả đơn hàng", url(host, "/")], ["Đơn chưa xác nhận", url(host, "/new")], ["Đơn đã hoàn thành", url(host, "/done")]]
  };
  return menus[type] || [];
}
function detectMenuType() {
  var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return ["products", "orders", "dashboard"].find(function (type) {
    return pathname.includes(type);
  }) || "";
}
module.exports = {
  getNavigation: getNavigation,
  detectMenuType: detectMenuType
};