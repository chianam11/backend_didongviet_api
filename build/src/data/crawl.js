"use strict";

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var phoneDir = path.join(__dirname, 'phone');
var tabletDir = path.join(__dirname, 'tablet');
var laptopDir = path.join(__dirname, 'laptop');
function extractAllProducts(htmlString) {
  var $ = cheerio.load(htmlString);
  var products = [];
  $('a[title]').each(function (_, el) {
    var _$el$attr;
    var $el = $(el);
    var name = (_$el$attr = $el.attr('title')) === null || _$el$attr === void 0 ? void 0 : _$el$attr.trim();
    var image = 'https://didongviet.vn/' + $el.find('img').first().attr('src');
    var linkHref = $el.attr('href');
    var link = linkHref !== null && linkHref !== void 0 && linkHref.startsWith('http') ? linkHref : "https://didongviet.vn".concat(linkHref);
    var price = $el.find('.text-left.text-ddv p.font-bold').first().text().trim();
    var oldPrice = $el.find('p.line-through').first().text().trim();
    if (name && image) {
      products.push({
        name: name,
        image: image,
        price: price,
        oldPrice: oldPrice,
        link: link
      });
    }
  });
  return products;
}
function loadHtmlFromDir(dirPath) {
  var files = fs.readdirSync(dirPath).filter(function (file) {
    return file.endsWith('.js');
  });
  return files.map(function (file) {
    var modulePath = path.join(dirPath, file);
    var htmlFunc = require(modulePath);
    return htmlFunc();
  });
}
var allPhoneHtml = loadHtmlFromDir(phoneDir);
var allTabletHtml = loadHtmlFromDir(tabletDir);
var allLaptopHtml = loadHtmlFromDir(laptopDir);
var phoneData = function phoneData() {
  return allPhoneHtml.flatMap(extractAllProducts);
};
var tabletData = function tabletData() {
  return allTabletHtml.flatMap(extractAllProducts);
};
var laptopData = function laptopData() {
  return allLaptopHtml.flatMap(extractAllProducts);
};
module.exports = {
  phoneData: phoneData,
  tabletData: tabletData,
  laptopData: laptopData
};