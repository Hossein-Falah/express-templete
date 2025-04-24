import http from "http";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import express, { NextFunction, Request, Response } from "express";

import config from "./configs/config";
import apiRoute from "./modules/api.route";
import logger from "./common/utils/logger.util";
import { PublicMessage } from "./common/enums/message.enum";
import ConnectToMongoDB from "./configs/databases/mongo.config";
import limiter from "./common/middlewares/server-limiter.middleware";
import { HandleGlobalException } from "./common/exception/global.exception";

export class CreateApplication {
    private app: express.Application;
    private PORT: number;
    private MODE: string;

    constructor(PORT: number, MODE: string) {
        this.app = express();
        this.PORT = PORT;
        this.MODE = MODE;

        this.configureApp();
        this.setupServer();
        this.connectToDB();
        this.setupRoutes();
        this.setupErrorHandling();
    }

    private configureApp(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use("/uploads", express.static("public"));
        this.app.use(cookieParser());
        this.app.use(limiter);
    }

    private setupServer(): void {
        const server = http.createServer(this.app);

        server.listen(this.PORT, () => {
            const runningMode: string = `Server running in ${this.MODE} mode`;
            const runningOnPort: string = `on port ${this.PORT}`;
            const runningSince: string = `[since ${new Date().toISOString()}]`;

            logger.info("🚀 Server is starting...");
            logger.info(`✅ ${runningMode} ${runningOnPort} ${runningSince}`);
            logger.info(`✅ Server is running on ${config.APP_URL}:${this.PORT}`);
        }).on("error", (error: Error) => {
            logger.error(`❌ Error starting server: ${error.message}`);
        });
    }

    private connectToDB(): void {
        const db = ConnectToMongoDB;
        db.connect();
    }

    private setupErrorHandling() {
        HandleGlobalException.register(express());
    };

    private setupRoutes() {
        this.app.use("/api", apiRoute);

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.status(StatusCodes.NOT_FOUND).json({
                message: PublicMessage.NOT_FOUND_MESSAGE,
                statusCode: StatusCodes.NOT_FOUND,
            });
        });
    }
}