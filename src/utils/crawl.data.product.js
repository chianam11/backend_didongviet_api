module.exports = function extractAllSamsungProducts(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const productLinks = doc.querySelectorAll('a[title][href*="samsung"]');
    const products = [];

    productLinks.forEach(link => {
        const name = link.getAttribute('title')?.trim() || null;

        const img = link.querySelector('.imgproduct img') || link.querySelector('img');
        const imageUrl = img?.getAttribute('src') || null;

        const linkHref = link.getAttribute('href');
        const fullLink = linkHref?.startsWith('http') ? linkHref : `https://didongviet.vn${linkHref}`;

        // Lấy giá hiện tại
        const priceEl = link.querySelector('p.font-bold');
        const price = priceEl?.textContent?.trim() || null;

        // Lấy giá gốc (có thể không có)
        const oldPriceEl = link.querySelector('p.line-through');
        const oldPrice = oldPriceEl?.textContent?.trim() || null;

        if (name && imageUrl) {
            products.push({ name, imageUrl, price, oldPrice, link: fullLink });
        }
    });

    return products;
}
