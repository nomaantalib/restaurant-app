const express = require("express");
const path = require("path");
const {
  registerController,
  loginController,
} = require("../controllers/authcontroller");

const router = express.Router();

// API ROUTES
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

module.exports = router;
