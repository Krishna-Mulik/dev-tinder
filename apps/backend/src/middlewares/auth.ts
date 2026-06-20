import { RequestHandler } from "express";
import { UserRegisterSchema } from "../utils/zodValidations";
import { BadRequestError } from "../errors";

const auth: RequestHandler = async (req, res, next) => {

    const { email, password } = req.body;

    const zodValResult = UserRegisterSchema.safeParse({ email, password });

    if (!zodValResult.success) {
        throw new BadRequestError(zodValResult.error.message);
    }

}

export default auth;
