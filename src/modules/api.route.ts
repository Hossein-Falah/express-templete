import { StatusCodes } from "http-status-codes";
import { Request, Response, Router } from "express";

const apiRoute = Router();

apiRoute.get("/", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({
        message: "Welcome to the API",
        statusCode: StatusCodes.OK,
    });
});
    
export default apiRoute;