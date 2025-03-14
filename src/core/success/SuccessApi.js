const { getReasonPhrase } = require('http-status-codes')

/* SuccessApi class base */
class SuccessApi {
  /**
   * Create an instance of SuccessApi
   * @param {Object} params - Information to initialize the object
   * @param {string} params.message - Description success message.
   * @param {number} params.statusCode - HTTP status code (default is 200).
   * @param {*}      params.data - Data returned from API.
   */
  constructor({ message = '', statusCode = 200, ...rest }) {
    this.statusCode = statusCode
    this.message = message || getReasonPhrase(statusCode)
    Object.assign(this, rest)
  }

  /**
   * @param {import('express').Response} res
   */
  jsonResponse(res) {
    return res.status(this.statusCode).json(this)
  }
}

module.exports.SuccessApi = SuccessApi
