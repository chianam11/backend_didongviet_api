//Tương ứng với model User
const { User, Brand } = require("../../models/index")
const Repository = require("../../core/repository");
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
module.exports = class extends Repository {
  getModel(models = User) {

    return models;
  }

  getUserByID(id) {
    return this.findByPk(id);
  }
  getUserByStatus(status) {
    return this.findAndCountAll({
      where: {
        type: status
      },
      raw: true,
      limit: 5,
      offset: 1
    });
    // return this.findAll()
  }
  createUserByAdmin(body) {

    const { create_user, name, username, password, email, role } = body;
    try {

      const hash = bcrypt.hashSync(password, 10)
      return this.findOrCreate(
        {
          where: { username }, // Kiểm tra dựa trên email
          defaults: {
            name,
            username,
            type: true,
            status: true,
            password: hash,
          },
        }
      )
    } catch (e) {

    }

  }


};