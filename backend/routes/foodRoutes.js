const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

//routes
// CREATE FOOD
router.post("/", authMiddleware, createFoodController);

// GET ALL FOOD
router.get("/", getAllFoodsController);

// GET SINGLE FOOD
router.get("/:id", getSingleFoodController);

// GET FOOD BY RESTAURANT
router.get("/restaurant/:id", getFoodByResturantController);

// UPDATE FOOD
router.put("/:id", authMiddleware, updateFoodController);

// DELETE FOOD
router.delete("/:id", authMiddleware, deleteFoodController);

// PLACE ORDER
router.post("/placeorder", authMiddleware, placeOrderController);

// ORDER STATUS
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);

module.exports = router;
