const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const getUserController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    //hide password
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "User get successfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "cannot get user , internal server error",
      error: error.message,
    });
  }
};

//******************************************************************************************************************************************
// *****************************************************************************************************************************************
// ***************************************************************************************************************************************** */

const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const { username, address, phone } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    /// save user
    await user.save();
    res.status(200).send({
      success: true,
      message: "user update successful",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error in update api",
    });
  }
};

//******************************************************************************************************************************************
// *****************************************************************************************************************************************
// ***************************************************************************************************************************************** */

const resetpassController = async (req, res) => {
  try {
    //finding user through id
    const user = userModel.findById({ _id: req.body.id });
    //validation
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "user not found",
      });
    }
    //get user data
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) {
      return res.status(500).send({
        success: false,
        message: "please provide oldpassword and newpassword",
      });
    }
    // const user = await userModel.findOne({ email });
    // if (!user) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "Invalid email ",
    //   });
    // }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newpassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in password reset API",
      error: error.message,
    });
  }
};

//******************************************************************************************************************************************
// *****************************************************************************************************************************************
// ***************************************************************************************************************************************** */
const deleteUserController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Your account has been deleted",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in delete user API",
    });
  }
};

//******************************************************************************************************************************************
// *****************************************************************************************************************************************
// ***************************************************************************************************************************************** */

module.exports = {
  getUserController,
  updateUserController,
  resetpassController,
  deleteUserController,
};
