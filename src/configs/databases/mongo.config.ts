import mongoose from "mongoose";
import logger from "../../common/utils/logger.util";
import config from "../config";

class ConnectToMongoDB {
    private MONGO_URL: string;

    constructor(MONGO_URL: string) {
        this.MONGO_URL = MONGO_URL;
    }

    async connect() {
        mongoose.connect(this.MONGO_URL);

        mongoose.connection.on("connected", () => {
            logger.info("✅ MongoDB connected successfully");
        });

        mongoose.connection.on("error", (error: Error) => {
            logger.error(`❌ MongoDB connection error: ${error.message}`);
        });

        mongoose.connection.on("disconnected", () => {
            logger.error("❌ MongoDB disconnected");
        });

        process.on("SIGINT", async () => {
            await mongoose.connection.close();
            logger.info("✅ MongoDB connection closed due to app termination");
            process.exit(0);
        })
    }
};

export default new ConnectToMongoDB(config.MONGO_URL);