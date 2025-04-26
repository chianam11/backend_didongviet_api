const usersSevices = require("../../services/userServices/users.service");
const { url } = require("../../utils/url")
const { User, UserInfo, Provider } = require("../../models/index")
module.exports = {
      index: async (req, res, next) => {
            const userAll = await usersSevices.getUsersByStatus_Admin_or_client(false);
            const employee = await usersSevices.getUsersByStatus_Admin_or_client(true);
            const { count: userNumber, rows: users } = userAll;
            const { count: employeeNumber, rows: employees } = employee;
            const successMessage = req.flash('success')
            const errorMessage = req.flash('errors')
            const warningMessage = req.flash("warning")
            const host = process.env.HOST + req.baseUrl;


            return res.render("users/users",
                  {
                        userNumber, employees, employeeNumber, users, successMessage, errorMessage, warningMessage,
                        nav: true,
                        categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]],

                  });

      },
      handleDeleteUser: async (req, res) => {

            try {
                  const { id } = req.params;

                  const user = await User.findByPk(id);
                  console.log(user);

                  await user.destroy();
                  req.flash("success", "Xóa người dùng thành công")
                  return res.redirect("/admin/v1/users");

            } catch (e) {
                  req.flash("error", "Xóa người dùng thất bại vui lòng thử lại sau!")
                  console.log(e);

            }

      },
      add: async (req, res) => {
            try {
                  const successMessage = req.flash('success')
                  const errorMessage = req.flash('errors')
                  const warningMessage = req.flash("warning")
                  const host = process.env.HOST + req.baseUrl;
                  return res.render("users/create",
                        {
                              successMessage, errorMessage, warningMessage,
                              nav: true,
                              req,
                              categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]],

                        });
            }
            catch (e) {

            }


      },
      edit: async (req, res) => {
            const successMessage = req.flash("success");
            const errorMessage = req.flash("errors");
            const warningMessage = req.flash("warning");
            const host = process.env.HOST + req.baseUrl;

            try {
                  const user = await User.findOne({
                        where: { id: req.params.id },
                        include: [
                              {
                                    model: UserInfo, // Dùng đúng tên model
                                    as: "userInfo",  // Phải khớp với alias trong `User.js`
                              }
                        ],
                  });

                  if (!user) {
                        return res.status(404).send("User not found");
                  }

                  // Nếu không có userInfo, tạo một đối tượng rỗng để tránh lỗi khi render EJS
                  const userInfo = user.userInfo || {
                        user_email: "",
                        user_phone: "",
                        user_location: "",
                  };

                  res.render("users/edit", {
                        user,
                        userInfo, // Truyền userInfo vào EJS
                        successMessage,
                        errorMessage,
                        warningMessage,
                        nav: true,
                        req,
                        categories: [
                              ["Danh sách người dùng", `${host}/`],
                              ["Tạo mới người dùng", `${host}/add`],
                              ["Nhà cung cấp sản phẩm", `${host}/suppliers`],
                        ],
                  });
            } catch (error) {
                  console.error(error);
                  req.flash("error", "Có lỗi xảy ra, vui lòng thử lại!");
                  return res.redirect(`/admin/v1/users/edit/${req.params.id}`);
            }
      },

      /**
       * Xử lý cập nhật người dùng
       */
      handleEdit: async (req, res) => {
            try {
                  console.log("Bắt đầu cập nhật thông tin người dùng...");

                  const { name, username, email, phone, location, status } = req.body;
                  const userId = req.params.id;

                  const user = await User.findByPk(userId);

                  if (!user) {
                        return res.status(404).send("User not found");
                  }

                  // Cập nhật bảng `users` (chú ý: email không nằm trong bảng `users`)
                  await user.update({ name, username, status });

                  // Kiểm tra user_info có tồn tại hay không
                  let userInfo = await UserInfo.findOne({ where: { user_id: userId } });

                  if (userInfo) {
                        // Nếu có thì cập nhật
                        await userInfo.update({
                              user_email: email,
                              user_phone: phone,
                              user_location: location,
                        });
                  } else {
                        // Nếu chưa có thì tạo mới
                        await UserInfo.create({
                              user_id: userId,
                              user_email: email,
                              user_phone: phone,
                              user_location: location,
                        });
                  }

                  req.flash("success", "Cập nhật thông tin thành công");
                  return res.redirect(`/admin/v1/users/edit/${userId}`);
            } catch (error) {
                  console.error(error);
                  req.flash("error", "Cập nhật thông tin thất bại, vui lòng thử lại sau!");
                  return res.redirect(`/admin/v1/users/edit/${req.params.id}`);
            }
      }
      ,
      handleUsers: async (req, res, next) => {
            const body = req.body;

            try {


                  if (!body.name || !body.username || !body.password) {
                        req.flash("warning", "Vui lòng nhập đủ các trường!");
                        return res.redirect("/admin/v1/users/add");
                  }
                  await usersSevices.createUserByAdmin(body).then(([user, created]) => {
                        if (created) {

                              req.flash("success", "Thêm người dùng thành công");

                              return res.redirect("/admin/v1/users/add");
                        } else {
                              req.flash("error", "người dùng đã tồn tại");
                              return res.redirect("/admin/v1/users/add");
                        }
                  });

            } catch (e) {
                  console.log(e);

            }



      },
      suppliers: async (req, res) => {
            const successMessage = req.flash('success')
            const errorMessage = req.flash('errors')
            const warningMessage = req.flash("warning")
            const host = process.env.HOST + req.baseUrl;
            return res.render("users/supplier", {
                  successMessage, errorMessage, warningMessage,
                  nav: true,
                  req,
                  categories: [["Danh sách người dùng", url(host, "/")], ["Tạo mới người dùng", url(host, "/add")], ["Nhà cung cấp sản phẩm", url(host, "/suppliers")]],
            })
      },
      handleSupplier: async (req, res) => {
            const body = req.body

            try {
                  if (!body) {
                        req.flash("warning", "Vui lòng nhập đủ các trường!");
                        return res.redirect("/admin/v1/users/suppliers");
                  }
                  await usersSevices.creatNewSupliers(body).then(([suppliers, created]) => {

                        if (created) {
                              req.flash("success", "Đã thêm mới nhà cung cấp");


                              return res.redirect("/admin/v1/users/suppliers");
                        } else {
                              req.flash("error", "Nhà cung cấp đã tồn tại");
                              return res.redirect("/admin/v1/users/suppliers");
                        }
                  });
            } catch (error) {

            }

      }
}