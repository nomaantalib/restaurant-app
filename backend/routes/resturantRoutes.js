const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");

const router = express.Router();

//routes
// CREATE RESTAURANT || POST
router.post("/", authMiddleware, createResturantController);

// GET ALL RESTAURANTS || GET
router.get("/", getAllResturantController);

// GET RESTAURANT BY ID || GET
router.get("/:id", getResturantByIdController);

// DELETE RESTAURANT || DELETE
router.delete("/:id", authMiddleware, deleteResturantController);

module.exports = router;
