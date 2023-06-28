const User = require("../model/User.model");

// create user
// exports.createUser = async (req, res, next) => {
//   try {
//     const users = User(req.body);
//     const result = await users.save();
//     res.status(200).json({
//       status: "successful",
//       message: "user create successful",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// get all users
exports.getAllUser = async (req, res, next) => {
  try {
    const result = await User.find({});
    res.status(200).json({
      status: "successful",
      message: "All users get successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//specific id's user get
exports.getSpecificUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findById({ _id: id });
    res.status(200).json({
      status: "successful",
      message: "This id's user get successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//specific id's user update
exports.updateSpecificUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        status: "un-successful",
        message: "This id's user can't find so can't update",
      });
    }
    const result = await user.set(req.body).save();
    res.status(200).json({
      status: "successful",
      message: "This id's user update successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//specific id's user delete
exports.deleteSpecificUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "un-successful",
        message: "This id's user not found",
      });
    }
    res.status(200).json({
      status: "successful",
      message: "This id's user delete successful",
    });
  } catch (error) {
    next(error);
  }
};
