import createHttpError, { HttpError } from "http-errors";
import { Express, NextFunction, Request, Response } from "express";

export class HandleGlobalException {
    public static register(app: Express): void {
        app.use(this.handleError);
    }

    private static handleError(err: HttpError, req: Request, res: Response, next: NextFunction) {
        const serverError = createHttpError.InternalServerError();
        
        const statusCode = err.status || serverError.status;
        const message = err.message || serverError.message;

        res.status(statusCode).json({
            statusCode,
            message
        });
    }
}