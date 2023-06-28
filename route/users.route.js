const express = require("express");
const userController = require("../controller/user.controller");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.get("/", verifyAdmin, userController.getAllUser);

router.get("/:id", verifyUser, userController.getSpecificUserById);

router.patch("/:id", verifyUser, userController.updateSpecificUserById);

router.delete("/id", verifyUser, userController.deleteSpecificUserById);

module.exports = router;
