import { BadRequestError } from "../errors";
import User from "../models/user.model";
import ApiResponse from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler";
import { UserRegisterSchema } from "../utils/zodValidations";

export const signup = asyncHandler(async (req, res) => {
	const { userName, fullName, email, password } = req?.body;

	const zodValResult = UserRegisterSchema.safeParse({ userName, fullName, email, password });

	if (!zodValResult.success) {
		throw new BadRequestError(zodValResult.error.message);
	}

	const existingUser = await User.findOne({
		email
	});

	if (existingUser) {
		return res.status(400).send('User already exists');
	}

	const user = await User.create({
		userName,
		fullName,
		email,
		password
	});

	const accessToken: string = user.generateAccessToken();

	res.status(201).json(new ApiResponse(201, {
		userName,
		fullName,
		email,
		password
	}))
});

export const login = asyncHandler(async (req, res) => {

});
