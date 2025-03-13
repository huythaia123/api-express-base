const { NotFound } = require('@src/core/error/ErrorApi')

function router404(req, res, next) {
  return next(
    new NotFound({
      message: 'Api Not Found',
    }),
  )
}
module.exports = router404
