import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { REFRESHTOKEN_SECRET, REFRESHTOKEN_EXPIRY, ACCESSTOKEN_SECRET, ACCESSTOKEN_EXPIRY } from "../config";

interface IUser {
	userName: string;
	fullName: string;
	email: string;
	password: string;
	github?: string;
	avatar?: string;
	coverImg?: string;
	refreshToken?: string;
}

interface IUserMethods {
	generateAccessToken(): string;
	generateRefreshToken(): string;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
	userName: {
		type: String,
		required: true,
		trim: true,
		index: true
	},
	fullName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		lowercase: true,
		trim: true,
		required: true
	},
	password: {
		type: String,
		required: [true, "password is required"],
	},
	github: {
		type: String,
		trim: true
	},
	avatar: {
		type: String,
	},
	coverImg: {
		type: String
	},
	refreshToken: {
		type: String
	}
}, { timestamps: true });

userSchema.pre('save', async function() {
	if (!this.isModified('password')) {
		return;
	}

	this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.generateAccessToken = function(): string {
	const options: SignOptions = { expiresIn: REFRESHTOKEN_EXPIRY as unknown as SignOptions['expiresIn'] };
	return jwt.sign({
		userId: this._id,
		userName: this.userName,
		fullName: this._fullName
	}, ACCESSTOKEN_SECRET, options);
}

userSchema.methods.generateRefreshToken = function(): string {
	if (!REFRESHTOKEN_SECRET || !REFRESHTOKEN_EXPIRY) throw new Error("Invalid Refresh token");
	const options: SignOptions = { expiresIn: REFRESHTOKEN_EXPIRY as unknown as SignOptions["expiresIn"] };
	return jwt.sign({ userId: this._id }, REFRESHTOKEN_SECRET, options);
}

const User = mongoose.model<IUser, UserModel>("User", userSchema);
export default User;

