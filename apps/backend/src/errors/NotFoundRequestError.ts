
import { StatusCodes } from "http-status-codes";
import CustomApiError from "./CustomApiError";

class NotFoundRequestError extends CustomApiError {
    constructor(message: string) {
        super(StatusCodes.NOT_FOUND, message);
    }
}

export default NotFoundRequestError;
