"use strict";

var UserRepository = require("../../repositories/usersRepository/users.repository");
var userRepository = new UserRepository();
var SuppliersRepository = require("../../repositories/usersRepository/supplier.repository");
var suppliersRepository = new SuppliersRepository();
module.exports = {
  createUser: function createUser() {
    //Gọi model user
  },
  login: function login() {
    //Gọi model user
  },
  getUsersByStatus_Admin_or_client: function getUsersByStatus_Admin_or_client() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    return userRepository.getUserByStatus(status, limit, offset);
  },
  createUserByAdmin: function createUserByAdmin(body) {
    return userRepository.createUserByAdmin(body);
  },
  creatNewSupliers: function creatNewSupliers(body) {
    return suppliersRepository.creatNewSupliers(body);
  }
};