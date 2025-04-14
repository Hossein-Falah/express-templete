import dotenv from "dotenv";
dotenv.config();

const config = {
    APP_URL: process.env.APP_URL as string,
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL as string,
    MODE: process.env.NODE_ENV as "development" | "production"
}

export default config;