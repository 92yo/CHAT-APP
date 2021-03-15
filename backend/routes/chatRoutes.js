import express from "express";
import {
  createChatroom,
  getAllChatrooms,
} from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(createChatroom).get(protect);
router.get("/rooms", protect, getAllChatrooms);

export default router;
