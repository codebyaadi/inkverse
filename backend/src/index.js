// Importing third-party modules
import express from "express";

// Importing local utility functions and configurations
import { logInfo } from "./utils/loginfo.utils.js";
import connectDB from "./configs/database.js";
import { resetColor, successColor } from "./utils/ansicolors.utils.js";

// Defining the default port
const DEFAULT_PORT = parseInt(process.env.PORT || "8080", 10);

// Creating an instance of the Express application
const app = express();

// Function to start the server
const startServer = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Start the Express server
        app.listen(DEFAULT_PORT, () => {
            logInfo(
                `✨ ${successColor}Success!${resetColor} Your server running at http://localhost:${DEFAULT_PORT} 🚀`
            );
        });
    } catch (error) {
        // Handle any errors that occur during server startup
        console.error(error);
    }
};

// Start the server
startServer();