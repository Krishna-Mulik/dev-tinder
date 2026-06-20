import type { StatusCodes } from "http-status-codes";

class ApiResponse {
	constructor(private statusCode: StatusCodes, private data: any, private message = 'success') {
		this.statusCode = statusCode;
		this.data = data;
		this.message = message
	}
}

export default ApiResponse;
