// utils/pagination.ts hoặc pagination.js
function getPagination(page = 1, limit = 10) {
    const _limit = +limit;
    const _page = +page || 1;
    const offset = (_page - 1) * _limit;

    return { limit: _limit, offset };
}

function getPagingData(data, page, limit) {
    const { count: totalItems, rows: results } = data;
    const currentPage = +page || 1;
    const totalPages = Math.ceil(totalItems / limit);

    return {
        totalItems,
        totalPages,
        currentPage,
        results
    };
}
module.exports = {
    getPagingData,
    getPagination
}