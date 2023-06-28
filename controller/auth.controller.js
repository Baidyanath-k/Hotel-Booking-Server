const User = require("../model/User.model");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// create user/register
exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const users = User({
      userName: req.body.userName,
      email: req.body.email,
      country: req.body.country,
      password: hash,
      city: req.body.city,
      address: req.body.address,
      phone: req.body.phone,
    });
    const result = await users.save();
    res.status(200).json({
      status: "successful",
      message: "user register successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// create login and JWT token
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      return next(createError(404, "user not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "wrong password and username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.jwt
    );

    const {
      password,
      country,
      city,
      address,
      phone,
      isAdmin,
      ...otherDetails
    } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: "successful",
        message: "user login successful",
        data: { ...otherDetails },
      });
  } catch (error) {
    next(error);
  }
};
