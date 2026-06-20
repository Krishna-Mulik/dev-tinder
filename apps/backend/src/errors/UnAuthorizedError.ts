import { StatusCodes } from "http-status-codes";
import CustomApiError from "./CustomApiError";

class UnAuthorizedError extends CustomApiError {
    constructor(message: string) {
        super(StatusCodes.UNAUTHORIZED, message);
    }
}

export default UnAuthorizedError;
