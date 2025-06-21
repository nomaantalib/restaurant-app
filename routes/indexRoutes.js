const express = require("express");
const { testcont } = require("../controllers/testcontroller");
const router = express.Router();

router.get("/", testcont);

module.exports = router;
