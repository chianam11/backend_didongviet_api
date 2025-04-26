const express = require("express");
const router = express.Router();
const usersController = require("../../../controllers/users/users.controller")
const authMiddleware = require("../../../middlewares/auth/auth.middleware")
const usersRouter = (app) => {
    router.get("/", usersController.index)
    router.delete("/:id", usersController.handleDeleteUser)
    router.get("/add", usersController.add)
    router.post("/add", usersController.handleUsers)
    router.get("/edit/:id", usersController.edit)
    router.patch("/edit/:id", usersController.handleEdit)

    router.get("/suppliers", usersController.suppliers)
    router.post("/suppliers", usersController.handleUsers)
    return app.use("/admin/v1/users", authMiddleware, router)
}
module.exports = usersRouter;