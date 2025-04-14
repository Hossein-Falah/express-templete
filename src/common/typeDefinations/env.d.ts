namespace NodeJS {
    interface ProcessEnv {
        APP_URL: string;
        PORT: number;
        MONGO_URL: string;
        NODE_ENV: development | production;
    }
}