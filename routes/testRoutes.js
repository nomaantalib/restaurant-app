const express = require("express");
const { testcont } = require("../controllers/testcontroller.js");

//router object
const router = express.Router();

//routes
router.get("/test", testcont);

//export
module.exports = router;
