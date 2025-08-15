const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");

const router = express.Router();

//routes
// CREATE CATEGORY
router.post("/", authMiddleware, createCatController);

// GET ALL CATEGORIES
router.get("/", getAllCatController);

// UPDATE CATEGORY
router.put("/:id", authMiddleware, updateCatController);

// DELETE CATEGORY
router.delete("/:id", authMiddleware, deleteCatController);

module.exports = router;
