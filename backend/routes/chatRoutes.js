const express = require("express");
const {
  createChatroom,
  getAllChatrooms,
} = require("../controllers/chatController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, createChatroom).get(getAllChatrooms);

module.exports = router;
