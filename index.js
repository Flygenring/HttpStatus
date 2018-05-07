// Used to make the status reasons private to the class
let httpStatuses = Symbol();


/**
 * Reference and translate HTTP Status Codes
 * Modified from: https://github.com/prettymuchbryce/node-http-status/blob/master/index.js
 * Implemented according to:
 * - http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 * - https://httpstatuses.com/
 * - https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * - http://hc.apache.org/httpcomponents-core-ga/httpcore/apidocs/org/apache/http/HttpStatus.html
 *
 * @returns {Object} - HTTP Status Code constants and a method to translate status codes to a description
 */
export default class {
	getReason(statusCode) {
		let code = this.guardInvalidCode(statusCode);

		return this[httpStatuses][code];
	}

	isSuccess(statusCode) {
		let code = parseInt(statusCode, 10);

		return code >= 200 && code <= 299;
	}

	/**
	 * Add codes and translations from code to reason to the class
	 */
	constructor() {
		this[httpStatuses] = {};
		this.code = {};

		/* 1xx: Informational - Request received, continuing process */
		this[httpStatuses][this.code.CONTINUE = 100] = "Continue";
		this[httpStatuses][this.code.SWITCHING_PROTOCOLS = 101] = "Switching Protocols";
		this[httpStatuses][this.code.PROCESSING = 102] = "Processing";
		this[httpStatuses][this.code.CHECKPOINT = 103] = "Checkpoint";
		// 104-199	Unassigned


		/* 2xx: Success - The action was successfully received, understood, and accepted */
		this[httpStatuses][this.code.OK = 200] = "OK";
		this[httpStatuses][this.code.CREATED = 201] = "Created";
		this[httpStatuses][this.code.ACCEPTED = 202] = "Accepted";
		this[httpStatuses][this.code.NON_AUTHORITATIVE_INFORMATION = 203] = "Non-Authoritative Information";
		this[httpStatuses][this.code.NO_CONTENT = 204] = "No Content";
		this[httpStatuses][this.code.RESET_CONTENT = 205] = "Reset Content";
		this[httpStatuses][this.code.PARTIAL_CONTENT = 206] = "Partial Content";
		this[httpStatuses][this.code.PARTIAL_UPDATE_OK = 207] = "Partial Update OK";
		this[httpStatuses][this.code.MULTI_STATUS = 207] = "Multi-Status";
		this[httpStatuses][this.code.ALREADY_REPORTED = 208] = "Already Reported";
		// 209-225	Unassigned
		this[httpStatuses][this.code.IM_USED = 226] = "Instance-Manipulation Used";
		// 227-299	Unassigned


		/* 3xx: Redirection - Further action must be taken in order to complete the request */
		this[httpStatuses][this.code.MULTIPLE_CHOICES = 300] = "Multiple Choices";
		this[httpStatuses][this.code.MOVED_PERMANENTLY = 301] = "Moved Permanently";
		this[httpStatuses][this.code.FOUND = 302] = "Found (Moved Temporarily)";
		this[httpStatuses][this.code.SEE_OTHER = 303] = "See Other";
		this[httpStatuses][this.code.NOT_MODIFIED = 304] = "Not Modified";
		this[httpStatuses][this.code.USE_PROXY = 305] = "Use Proxy";
		// 306	(Unused)
		this[httpStatuses][this.code.TEMPORARY_REDIRECT = 307] = "Temporary Redirect";
		this[httpStatuses][this.code.PERMANENT_REDIRECT = 308] = "Permanent Redirect";
		// 309-399	Unassigned


		/* 4xx: Client Error - The request contains bad syntax or cannot be fulfilled */
		this[httpStatuses][this.code.BAD_REQUEST = 400] = "Bad Request";
		this[httpStatuses][this.code.UNAUTHORIZED = 401] = "Unauthorized";
		this[httpStatuses][this.code.PAYMENT_REQUIRED = 402] = "Payment Required";
		this[httpStatuses][this.code.FORBIDDEN = 403] = "Forbidden";
		this[httpStatuses][this.code.NOT_FOUND = 404] = "Not Found";
		this[httpStatuses][this.code.METHOD_NOT_ALLOWED = 405] = "Method Not Allowed";
		this[httpStatuses][this.code.NOT_ACCEPTABLE = 406] = "Not Acceptable";
		this[httpStatuses][this.code.PROXY_AUTHENTICATION_REQUIRED = 407] = "Proxy Authentication Required";
		this[httpStatuses][this.code.REQUEST_TIMEOUT = 408] = "Request Timeout";
		this[httpStatuses][this.code.CONFLICT = 409] = "Conflict";
		this[httpStatuses][this.code.GONE = 410] = "Gone";
		this[httpStatuses][this.code.LENGTH_REQUIRED = 411] = "Length Required";
		this[httpStatuses][this.code.PRECONDITION_FAILED = 412] = "Precondition Failed";
		this[httpStatuses][this.code.PAYLOAD_TOO_LARGE = 413] = "Payload Too Large";
		this[httpStatuses][this.code.URI_TOO_LONG = 414] = "URI Too Long";
		this[httpStatuses][this.code.UNSUPPORTED_MEDIA_TYPE = 415] = "Unsupported Media Type";
		this[httpStatuses][this.code.RANGE_NOT_SATISFIABLE = 416] = "Range Not Satisfiable";
		this[httpStatuses][this.code.EXPECTATION_FAILED = 417] = "Expectation Failed";
		this[httpStatuses][this.code.I_AM_A_TEAPOT = 418] = "I'm A Teapot";
		// 419-420	Unassigned
		this[httpStatuses][this.code.MISDIRECTED_REQUEST = 421] = "Misdirected Request";
		this[httpStatuses][this.code.UNPROCESSABLE_ENTITY = 422] = "Unprocessable Entity";
		this[httpStatuses][this.code.LOCKED = 423] = "Locked";
		this[httpStatuses][this.code.FAILED_DEPENDENCY = 424] = "Failed Dependency";
		// 425	Unassigned
		this[httpStatuses][this.code.UPGRADE_REQUIRED = 426] = "Upgrade Required";
		// 427	Unassigned
		this[httpStatuses][this.code.PRECONDITION_REQUIRED = 428] = "Precondition Required";
		this[httpStatuses][this.code.TOO_MANY_REQUESTS = 429] = "Too Many Requests";
		// 430	Unassigned
		this[httpStatuses][this.code.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "Request Header Fields Too Large";
		// 432-450	Unassigned
		this[httpStatuses][this.code.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "Unavailable for Legal Reasons";
		// 452-499	Unassigned


		/* 5xx: Server Error - The server failed to fulfill an apparently valid request */
		this[httpStatuses][this.code.INTERNAL_SERVER_ERROR = 500] = "Internal Server Error";
		this[httpStatuses][this.code.NOT_IMPLEMENTED = 501] = "Not Implemented";
		this[httpStatuses][this.code.BAD_GATEWAY = 502] = "Bad Gateway";
		this[httpStatuses][this.code.SERVICE_UNAVAILABLE = 503] = "Service Unavailable";
		this[httpStatuses][this.code.GATEWAY_TIMEOUT = 504] = "Gateway Timeout";
		this[httpStatuses][this.code.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP Version Not Supported";
		this[httpStatuses][this.code.VARIANT_ALSO_NEGOTIATES = 506] = "Variant Also Negotiates";
		this[httpStatuses][this.code.INSUFFICIENT_STORAGE = 507] = "Insufficient Storage";
		this[httpStatuses][this.code.LOOP_DETECTED = 508] = "Loop Detected";
		this[httpStatuses][this.code.BANDWIDTH_LIMIT_EXCEEDED = 509] = "Bandwidth Limit Exceeded";
		this[httpStatuses][this.code.NOT_EXTENDED = 510] = "Not Extended";
		this[httpStatuses][this.code.NETWORK_AUTHENTICATION_REQUIRED = 511] = "Network Authentication Required";
		// 512-598	Unassigned
		this[httpStatuses][this.code.NETWORK_CONNECT_TIMEOUT_ERROR = 599] = "Network Connect Timeout Error";
	}

	guardInvalidCode(statusCode) {
		let code = parseInt(statusCode, 10);

		if(code != statusCode) { //eslint-disable-line eqeqeq
			throw new Error("Status code \"" + code + "\" is invalid.");
		}

		if(code === 306) { //eslint-disable-line no-magic-numbers
			throw new Error("Status code \"" + code + "\" is explicitly reserved but not used.");
		}

		if(!this[httpStatuses].hasOwnProperty("" + code)) {
			throw new Error("Status code \"" + code + "\" is unassigned.");
		}

		return code;
	}
};
