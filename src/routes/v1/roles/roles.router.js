const express = require("express");
const router = express.Router();
const roleController = require("../../../controllers/roles/role.controller");
const authMiddleware = require("../../../middlewares/auth/auth.middleware");

const rolesRouter = (app) => {
    router.get("/roles", roleController.index)
    router.delete("/roles/:id", roleController.handleDelete)
    router.get("/roles/add", roleController.add)
    router.post("/roles/add", roleController.handleAdd)
    router.get("/roles/edit/:id", roleController.edit)
    router.post("/roles/edit/:id", roleController.handleEdit)
    return app.use("/admin/v1", authMiddleware, router)
}
module.exports = rolesRouter;