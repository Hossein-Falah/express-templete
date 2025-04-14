import winston from "winston";

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = winston.createLogger({
    level: "info",
    format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }), // Enable stack trace for errors
        logFormat
    ),
    transports: [
        // Log console
        new winston.transports.Console(),

        // Lerror.log
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),

        // combined.log
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'logs/exceptions.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'logs/rejections.log' }),
    ]
})

export default logger;