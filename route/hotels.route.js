const express = require("express");
const hotelController = require("../controller/hotels.controllers");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.post("/", verifyAdmin, hotelController.createHotel);
router.get("/", hotelController.getData);

router.get("/:id", hotelController.hotelGetSpecificData);
router.patch("/:id", verifyAdmin, hotelController.hotelUpdateOne);
router.delete("/:id", verifyAdmin, hotelController.hotelDeleteOne);

module.exports = router;
