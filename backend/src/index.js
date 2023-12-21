// Importing third-party modules
import express from "express";
import * as dotenv from "dotenv";

// Importing local utility functions and configurations
import connectDB from "./configs/database.js";
import userRoutes from "./routes/user.route.js";
import { logInfo } from "./utils/loginfo.utils.js";
import { resetColor, successColor } from "./utils/ansicolors.utils.js";

// Load environment variables from .env file
dotenv.config();

const DEFAULT_PORT = parseInt(process.env.PORT || "8080", 10);

const app = express();
app.use(express.json());

// Define routes
app.use("/api", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello! Inkverse",
  });
});

// Start the server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(DEFAULT_PORT, () => {
      logInfo(
        `✨ ${successColor}Success!${resetColor} Your server running at http://localhost:${DEFAULT_PORT} 🚀`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
