// Importing third-party modules
import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Importing local utility functions and configurations
import { successColor, infoColor, resetColor } from "../utils/ansicolors.utils.js";
import { formBytes } from "../utils/calculate.utils.js";
import { logInfo } from "../utils/loginfo.utils.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Ensure we have a valid URI before connecting 
const connectDB = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error(logInfo("Missing MongoDB URI! Please set it in .env.", null, true));
        }

        // Connect to MongoDB with modern settings 
        await mongoose.connect(MONGO_URI, {
            w: "majority", // Ensure data consistency across all DB members ️
            autoIndex: true,
        });

        const db = mongoose.connection.db; // Grab the database connection 

        // Explore the connected database 
        logInfo(`${successColor}✨ Success!${resetColor} You're connected to MongoDB!`);

        const collections = await db.listCollections().toArray(); // List all collections 
        const dbname = db.databaseName; // Get the database name 
        const cluster = mongoose.connections[0].host.split(".")[0]; // Extract the cluster name 

        logInfo(`${infoColor}Database name:${resetColor} ${dbname.toLowerCase()}`);
        logInfo(`${infoColor}Cluster:${resetColor} ${cluster}`);

        logInfo(`${infoColor}Collections:${resetColor}`); // List collections with document count 
        for (const collection of collections) {
            const numDocuments = await db.collection(collection.name).countDocuments();
            logInfo(`  - ${collection.name} (${numDocuments} documents)`);
        }

        const stats = await db.stats(); // Get database size information 
        logInfo(`${infoColor}Database size:${resetColor} ${formBytes(stats.dataSize)}`); // Human-readable size 
    } catch (err) {
        logInfo(`Error connecting to MongoDB: `, err.message, true)
    }
};

export default connectDB;