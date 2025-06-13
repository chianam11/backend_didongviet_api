const { url } = require("./url");

function getNavigation(host, type = "") {
    const menus = {
        products: [
            ["Tạo mới sản phẩm", url(host, "/add")],
            ["Danh sách đơn hàng", url(host, "/order")],
            ["Đơn hàng chưa xác nhận", url(host, "/new-order")],
            ["Đơn hàng đã giao", url(host, "/completed-order")],
            ["Đơn hàng bị hủy", url(host, "/voided-order")]
        ],
        dashboard: [
            ["Thống kê doanh thu", url(host, "/revenue")],
            ["Báo cáo hàng tồn", url(host, "/inventory")]
        ],
        orders: [
            ["Tất cả đơn hàng", url(host, "/")],
            ["Đơn chưa xác nhận", url(host, "/new")],
            ["Đơn đã hoàn thành", url(host, "/done")]
        ]
    };

    return menus[type] || [];
}

function detectMenuType(pathname = "") {
    return (
        ["products", "orders", "dashboard"].find((type) =>
            pathname.includes(type)
        ) || ""
    );
}

module.exports = { getNavigation, detectMenuType };
