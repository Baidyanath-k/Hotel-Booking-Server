const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router
  .route("/")
  .get(userController.getAllUser);


  router
    .route("/:id")
    .get(userController.getSpecificUserById)
    .patch(userController.updateSpecificUserById)
    .delete(userController.deleteSpecificUserById);

module.exports = router;
