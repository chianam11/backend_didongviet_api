const { url } = require("../../utils/url")
const { Role, Permission, User } = require("../../models/index")
const { string } = require("yup")
const { isPermission } = require("../../utils/permission")
module.exports = {
  index: async (req, res) => {
    const { id } = req.params
    const successMessage = req.flash('success')
    const errorMessage = req.flash('error')
    const errorElements = req.errors
    const warningMessage = req.flash("warning")
    const host = process.env.HOST + req.baseUrl;
    const roles = await Role.findAll({
      include: [
        {
          model: Permission,
          as: "permissions",
          through: { attributes: [] }, // Ẩn bảng trung gian
          raw: true
        },
      ],

    });
    const cleanData = roles.map((p) => {

      return p.get({ plain: true })

    });

    res.render("roles/roles",
      {
        layout: true,
        successMessage, errorMessage, warningMessage, errorElements,
        nav: true,
        categories: [["Tạo quyền hạn", url(host, "/roles/add")]],
        req,
        roles,
        id

      }
    );
  },
  handleDelete: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);

      const role = await Role.findByPk(id, {
        include: [
          {
            model: Permission,
            as: "permissions",
          },
          {
            model: User,
            as: "users",
          },
        ],
      });
      await role.removePermissions(role.permissions); //Xóa dữ liệu bảng roles_permissions
      await role.removeUsers(role.users); //Xóa dữ liệu bảng roles_users
      await role.destroy(); //Xóa dữ liệu bảng roles 
      req.flash("success", "Xóa quyền thành công")
      return res.redirect("/admin/v1/roles");

    } catch (e) {
      res.json(e)
      req.flash("error", "Xóa quyền thất bại vui lòng thử lại sau")

    }



  },
  add: (req, res) => {
    const successMessage = req.flash('success')
    const errorMessage = req.flash('error')
    const errorElements = req.errors
    const warningMessage = req.flash("warning")
    const host = process.env.HOST + req.baseUrl;
    res.render("roles/add",
      {
        layout: true,
        successMessage, errorMessage, warningMessage, errorElements,
        nav: true,
        categories: [["Danh sách quyền", url(host, "/roles")]],
        req,
      }
    );
  },
  handleAdd: async (req, res) => {
    try {
      const validateBody = await req.validate(req.body, {
        name: string().required("Vui lòng nhập tên quyền").max(255, "vui lòng không nhập tên Role quá 255 ký tự"),
      });
      let { name, permissions, description } = req.body;
      if (!name) {
        req.flash("msg", "Vui lòng nhập tên vai trò");
        return res.redirect("/admin/v1/roles");
      }
      if (!permissions) {
        permissions = [];
      }
      permissions = Array.isArray(permissions) ? permissions : [permissions];
      const role = await Role.create({ name, description });

      if (role && permissions.length) {
        //Lấy được 1 mảng chứa danh sách các instance của từng permission (Đã được thêm vào database hoặc được lấy ra từ database)
        const permissionInstances = await Promise.all(
          permissions.map(async (value) => {
            const [permissionInstance] = await Permission.findOrCreate({
              where: { name: value.trim() },
              defaults: { name: value.trim() },
            });
            return permissionInstance;
          }),
        );

        //Thêm role và permission vào bảng: roles_permissions
        await role.addPermissions(permissionInstances);
        req.flash("success", "Tạo quyền thành công")

      }
      return res.redirect("/admin/v1/roles");


    } catch (e) {
      if (e.errors) {
        req.flash("error", "Tên quyền đã tồn tại!")
      }

      res.redirect("/admin/v1/roles")



    }

  },
  edit: async (req, res) => {
    const successMessage = req.flash('success')
    const errorMessage = req.flash('error')
    const errorElements = req.errors
    const warningMessage = req.flash("warning")
    const host = process.env.HOST + req.baseUrl;
    const { id } = req.params;

    // Truy vấn Role với dữ liệu permissions và role_permissions
    const roleData = await Role.findByPk(id, {
      include: [
        {
          model: Permission,
          as: "permissions",
          raw: false, // Đảm bảo raw: false để nhận được đầy đủ thông tin chi tiết

        }
      ]
    });

    // Kiểm tra dữ liệu trả về
    const checkrole = JSON.stringify(roleData, null, 2) // Dễ dàng xem dữ liệu trả về
    const role = JSON.parse(checkrole);
    console.log(role);

    res.render("roles/edit", {
      role, isPermission,
      layout: true,
      successMessage, errorMessage, warningMessage, errorElements,
      nav: true,
      categories: [["Tạo quyền", url(host, "/add")]],
    });
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    let { name, permissions } = req.body;
    if (!name) {
      req.flash("msg", "Vui lòng nhập tên vai trò");
      return res.redirect("/roles/edit/" + id);
    }
    if (!permissions) {
      permissions = [];
    }
    permissions = Array.isArray(permissions) ? permissions : [permissions];
    await Role.update({ name }, { where: { id } });
    const role = await Role.findByPk(id);
    if (role && permissions.length) {
      //Lấy được 1 mảng chứa danh sách các instance của từng permission (Đã được thêm vào database hoặc được lấy ra từ database)
      const permissionInstances = await Promise.all(
        permissions.map(async (value) => {
          const [permissionInstance] = await Permission.findOrCreate({
            where: { name: value.trim() },
            defaults: { name: value.trim() },
          });
          return permissionInstance;
        }),
      );

      //Thêm role và permission vào bảng: roles_permissions
      await role.setPermissions(permissionInstances);
      req.flash("success", "Cập nhật thành công")
    }
    return res.redirect("/admin/v1/roles/edit/" + id);
  }
}
