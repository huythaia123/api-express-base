function ErrorHandling(err, req, res, next) {
  console.error(err)
  const _err = {
    message: err.message,
    statusCode: err.statusCode,
  }
  return res.status(err.statusCode || 500).json(_err)
}

module.exports = ErrorHandling
