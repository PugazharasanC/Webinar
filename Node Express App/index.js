import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://webinar-may13.netlify.app/"],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
connectDB();
// Routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Express app is running",
  });
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
