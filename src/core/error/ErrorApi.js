const { getReasonPhrase, StatusCodes } = require('http-status-codes')

/* ErrorApi class base */
class ErrorApi extends Error {
    /**
     * Create an instance of ErrorApi
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     * @param {number} params.statusCode - HTTP status code (default is 500).
     */
    constructor({ message = '', statusCode = 500 }) {
        super(message || getReasonPhrase(statusCode))
        this.statusCode = statusCode
    }
}
module.exports.ErrorApi = ErrorApi

/* 400 Bad Request */
class BadRequest extends ErrorApi {
    /**
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     */
    constructor({ message = '' }) {
        super({ message, statusCode: StatusCodes.BAD_REQUEST })
    }
}
module.exports.BadRequest = BadRequest

/* 401 Unauthorized */
class Unauthorized extends ErrorApi {
    /**
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     */
    constructor({ message = '' }) {
        super({ message, statusCode: StatusCodes.UNAUTHORIZED })
    }
}
module.exports.Unauthorized = Unauthorized

/* 403 Forbidden */
class Forbidden extends ErrorApi {
    /**
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     */
    constructor({ message = '' }) {
        super({ message, statusCode: StatusCodes.FORBIDDEN })
    }
}
module.exports.Forbidden = Forbidden

/* 404 Not Found */
class NotFound extends ErrorApi {
    /**
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     */
    constructor({ message = '' }) {
        super({ message, statusCode: StatusCodes.NOT_FOUND })
    }
}
module.exports.NotFound = NotFound

/* 500 Internal Server Error */
class InternalServerError extends ErrorApi {
    /**
     * @param {Object} params - Information to initialize the object.
     * @param {string} params.message - Description error message.
     */
    constructor({ message = '' }) {
        super({ message, statusCode: StatusCodes.INTERNAL_SERVER_ERROR })
    }
}
module.exports.InternalServerError = InternalServerError
