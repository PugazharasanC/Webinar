import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import isAuthenticated from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

// Public Routes
router.post("/register",upload.single('avatar'), registerUser);

router.post("/login", loginUser);

// Protected Routes
router.get("/me", isAuthenticated, getCurrentUser);

router.get("/logout", isAuthenticated, logoutUser);

export default router;
