const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Must be enter Hotel name"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Must be enter email"],
      unique: true,
    },
    country: {
      type: String,
      required: [true, "Must be enter country"],
    },
    password: {
      type: String,
      required: [true, "Must be enter password"],
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
    phone: {
      type: String,
      trim: true,
      required: [true, "Must be enter phone number"],
      unique:true,
    },
    phots: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
