"use strict";

// utils/pagination.ts hoặc pagination.js
function getPagination() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var _limit = +limit;
  var _page = +page || 1;
  var offset = (_page - 1) * _limit;
  return {
    limit: _limit,
    offset: offset
  };
}
function getPagingData(data, page, limit) {
  var totalItems = data.count,
    results = data.rows;
  var currentPage = +page || 1;
  var totalPages = Math.ceil(totalItems / limit);
  return {
    totalItems: totalItems,
    totalPages: totalPages,
    currentPage: currentPage,
    results: results
  };
}
module.exports = {
  getPagingData: getPagingData,
  getPagination: getPagination
};