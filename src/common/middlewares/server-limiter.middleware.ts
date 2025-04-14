import createRateLimiterMiddleware from "express-rate-limit";

const fifteenMinInMs = 15 * 60 * 1000;

const limiter = createRateLimiterMiddleware({
    windowMs: fifteenMinInMs,
    max: 100
})

export default limiter;