import express from "express";
import { authUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect);
router.post("/login", authUser);

export default router;
