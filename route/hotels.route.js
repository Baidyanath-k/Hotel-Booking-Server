const express = require("express");
const hotelController = require("../controller/hotels.controllers");
const router = express.Router();

router
  .route("/")
  .post(hotelController.createHotel)
  .get(hotelController.getData);

router
  .route("/:id")
  .get(hotelController.hotelGetSpecificData)
  .patch(hotelController.hotelUpdateOne)
  .delete(hotelController.hotelDeleteOne);

module.exports = router;
