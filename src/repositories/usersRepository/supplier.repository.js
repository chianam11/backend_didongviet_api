//Tương ứng với model User
const {Brand} = require("../../models/index")
const Repository = require("../../core/repository");
module.exports = class extends Repository {
  getModel() {
    
    return Brand;
  }

  //tạo mới nhà phân phối
  creatNewSupliers (body){
const {name,description,logo_url,website_url} = body;
return this.findOrCreate(
  {
    where: { name }, // Kiểm tra dựa trên email
    defaults: {
      name,
      description:"",
      logo_url:"",
      website_url:"",
    },
  }
)
  }
};