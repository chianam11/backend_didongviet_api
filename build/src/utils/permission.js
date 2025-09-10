"use strict";

module.exports = {
  isPermission: function isPermission(permissions, name) {
    return permissions.find(function (item) {
      return item.name === name;
    });
  }
};