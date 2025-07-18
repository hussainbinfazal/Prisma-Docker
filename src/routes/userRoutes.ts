import { Router } from "express";
const router = Router();
import { middleware } from "../middleware/middleware.js";
import {
  getAllUsers,
  createUser,
  getUserById,
  loginUser,
} from "../controller/userController.js";







router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
