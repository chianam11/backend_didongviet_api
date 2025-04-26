const UserRepository = require("../../repositories/usersRepository/users.repository");
const userRepository = new UserRepository();
const SuppliersRepository = require("../../repositories/usersRepository/supplier.repository");
const suppliersRepository = new SuppliersRepository();
module.exports = {
  createUser: () => {
    //Gọi model user
  },
  login: () => {
    //Gọi model user
  },
  getUsersByStatus_Admin_or_client(status=false,limit=2,offset=10) {
    return userRepository.getUserByStatus(status,limit,offset);
  },
  createUserByAdmin(body){
  return userRepository.createUserByAdmin(body)
  },
  creatNewSupliers(body){
    return suppliersRepository.creatNewSupliers(body)
  }
};