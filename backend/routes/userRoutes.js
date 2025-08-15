const express = require("express");
const {
  getUserController,
  updateUserController,
  resetpassController,
  deleteUserController,
} = require("../controllers/usercontroller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//routes
//GET USER || GET

router.get("/getuser", authMiddleware, getUserController);
// UPDATE user || PUT
router.put("/updateuser", authMiddleware, updateUserController);
// reset router
router.post("/resetpassword", authMiddleware, resetpassController);
// delete user profile
router.delete("/deleteuser/:id", authMiddleware, deleteUserController);
module.exports = router;
