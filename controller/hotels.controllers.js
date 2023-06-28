const Hotel = require("../model/hotel.model");
const { createError } = require("../utils/error");

// create
exports.createHotel = async (req, res, next) => {
  try {
    const hotels = Hotel(req.body);
    const result = await hotels.save();

    res.status(200).json({
      status: "Successful",
      message: "Hotel create successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all
exports.getData = async (req, res, next) => {
  try {
    const result = await Hotel.find({});
    res.status(200).json({
      status: "Successful",
      message: "Hotels data get successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get by id
exports.hotelGetSpecificData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Hotel.findOne({ _id: id });
    res.status(200).json({
      status: "successful",
      message: "Hotel specific data get successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update one
exports.hotelUpdateOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(400).json({
        status: "un-successful",
        message: "This id's hotel can't find so can't update",
      });
    }
    const result = await hotel.set(req.body).save();
    res.status(200).json({
      status: "successful",
      message: "Hotel update data successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete one
exports.hotelDeleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Hotel.deleteOne({ _id: id });

    if (!result.deletedCount) {
      return res
        .status(404)
        .json({
          status: "not found",
          message: "This hotel not found",
        });
    }

    res.status(200).json({
      status: "successful",
      message: "Hotel delete data successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
