const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: [true, "Must be enter Hotel name"],
      trim: true,
    },
    hotelType: {
      type: String,
      required: [true, "Must be enter your type"],
    },
    city: {
      type: String,
      trim: true,
      required: [true, "Must be enter city"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "Must be enter address"],
    },
    distance: {
      type: String,
      required: [true, "Must be enter distance"],
    },
    phots: {
      type: [String],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Must be enter description"],
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Must be enter title"],
    },
    hotelRating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rooms: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
      required: [true, "Must be enter price"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
