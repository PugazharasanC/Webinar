import User from "../models/user.model.js";
import sendToken from "../utils/sendToken.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt";

// =========================================
// REGISTER USER
// =========================================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let avatarData = {
      public_id: "",
      url: "",
    };

    // Upload avatar if exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "auth-demo",
      });

      avatarData = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }
    // Validate fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      avatar: avatarData,
    });

    // Send token response
    sendToken(user, 201, res, "User registered successfully");
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// =========================================
// LOGIN USER
// =========================================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user with password
    const user = await User.findOne({ email }).select("+password");

    // Check user
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Send token response
    sendToken(user, 200, res, "Login successful");
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// =========================================
// LOGOUT USER
// =========================================
export const logoutUser = async (_req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// =========================================
// GET CURRENT USER
// =========================================
export const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
