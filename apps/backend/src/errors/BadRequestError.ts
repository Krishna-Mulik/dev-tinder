import { StatusCodes } from "http-status-codes";
import CustomApiError from "./CustomApiError";

class BadRequestError extends CustomApiError {
    constructor(message: string) {
        super(StatusCodes.BAD_REQUEST, message);
    }
}

export default BadRequestError;
