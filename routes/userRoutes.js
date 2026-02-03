import express from "express";
import auth from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

export default router;
