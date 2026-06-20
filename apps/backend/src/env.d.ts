declare namespace NodeJS {
	interface ProcessEnv {
		PORT?: string,
		MONGO_URI?: string,
		REFRESHTOKEN_SECRET?: string,
		REFRESHTOKEN_EXPIRY?: string,
		ACCESSTOKEN_SECRET?: string,
		ACCESSTOKEN_EXPIRY?: string
	}
}
