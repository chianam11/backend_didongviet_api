"use strict";

var express = require("express");
var router = express.Router();
var roleController = require("../../../controllers/roles/role.controller");
var authMiddleware = require("../../../middlewares/auth/auth.middleware");
var rolesRouter = function rolesRouter(app) {
  router.get("/roles", roleController.index);
  router["delete"]("/roles/:id", roleController.handleDelete);
  router.get("/roles/add", roleController.add);
  router.post("/roles/add", roleController.handleAdd);
  router.get("/roles/edit/:id", roleController.edit);
  router.post("/roles/edit/:id", roleController.handleEdit);
  return app.use("/admin/v1", authMiddleware, router);
};
module.exports = rolesRouter;