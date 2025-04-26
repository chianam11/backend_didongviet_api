const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const phoneDir = path.join(__dirname, 'phone');
const tabletDir = path.join(__dirname, 'tablet');
const laptopDir = path.join(__dirname, 'laptop');

function extractAllProducts(htmlString) {
    const $ = cheerio.load(htmlString);
    const products = [];

    $('a[title]').each((_, el) => {
        const $el = $(el);

        const name = $el.attr('title')?.trim();
        const image = 'https://didongviet.vn/' + $el.find('img').first().attr('src');
        const linkHref = $el.attr('href');
        const link = linkHref?.startsWith('http') ? linkHref : `https://didongviet.vn${linkHref}`;

        const price = $el.find('.text-left.text-ddv p.font-bold').first().text().trim();
        const oldPrice = $el.find('p.line-through').first().text().trim();

        if (name && image) {
            products.push({ name, image, price, oldPrice, link });
        }
    });

    return products;
}

function loadHtmlFromDir(dirPath) {
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));
    return files.map(file => {
        const modulePath = path.join(dirPath, file);
        const htmlFunc = require(modulePath);
        return htmlFunc();
    });
}

const allPhoneHtml = loadHtmlFromDir(phoneDir);
const allTabletHtml = loadHtmlFromDir(tabletDir);
const allLaptopHtml = loadHtmlFromDir(laptopDir);
const phoneData = () => allPhoneHtml.flatMap(extractAllProducts);
const tabletData = () => allTabletHtml.flatMap(extractAllProducts);
const laptopData = () => allLaptopHtml.flatMap(extractAllProducts);
module.exports = { phoneData, tabletData, laptopData };


