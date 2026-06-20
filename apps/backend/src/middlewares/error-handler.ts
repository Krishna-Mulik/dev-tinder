import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "../errors"

const errorHandler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).send(err.message);
    }

    console.log(err);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
}

export default errorHandler;
