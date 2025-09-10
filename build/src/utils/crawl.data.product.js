"use strict";

module.exports = function extractAllSamsungProducts(htmlString) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(htmlString, 'text/html');
  var productLinks = doc.querySelectorAll('a[title][href*="samsung"]');
  var products = [];
  productLinks.forEach(function (link) {
    var _link$getAttribute, _priceEl$textContent, _oldPriceEl$textConte;
    var name = ((_link$getAttribute = link.getAttribute('title')) === null || _link$getAttribute === void 0 ? void 0 : _link$getAttribute.trim()) || null;
    var img = link.querySelector('.imgproduct img') || link.querySelector('img');
    var imageUrl = (img === null || img === void 0 ? void 0 : img.getAttribute('src')) || null;
    var linkHref = link.getAttribute('href');
    var fullLink = linkHref !== null && linkHref !== void 0 && linkHref.startsWith('http') ? linkHref : "https://didongviet.vn".concat(linkHref);

    // Lấy giá hiện tại
    var priceEl = link.querySelector('p.font-bold');
    var price = (priceEl === null || priceEl === void 0 || (_priceEl$textContent = priceEl.textContent) === null || _priceEl$textContent === void 0 ? void 0 : _priceEl$textContent.trim()) || null;

    // Lấy giá gốc (có thể không có)
    var oldPriceEl = link.querySelector('p.line-through');
    var oldPrice = (oldPriceEl === null || oldPriceEl === void 0 || (_oldPriceEl$textConte = oldPriceEl.textContent) === null || _oldPriceEl$textConte === void 0 ? void 0 : _oldPriceEl$textConte.trim()) || null;
    if (name && imageUrl) {
      products.push({
        name: name,
        imageUrl: imageUrl,
        price: price,
        oldPrice: oldPrice,
        link: fullLink
      });
    }
  });
  return products;
};