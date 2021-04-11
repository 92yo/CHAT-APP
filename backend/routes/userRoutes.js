const express = require("express");
const { authUser, registerUser } = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect);
router.post("/login", authUser);

module.exports = router;
