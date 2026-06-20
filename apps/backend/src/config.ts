export const PORT = process.env.PORT || 3002;
export const REFRESHTOKEN_SECRET = process.env.REFRESHTOKEN_SECRET as string;
export const REFRESHTOKEN_EXPIRY = (process.env.REFRESHTOKEN_EXPIRY ?? '10d') as string;
export const ACCESSTOKEN_SECRET = (process.env.ACCESSTOKEN_SECRET) as string;
export const ACCESSTOKEN_EXPIRY = (process.env.ACCESSTOKEN_EXPIRY ?? '15m') as string;
