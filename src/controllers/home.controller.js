const { SuccessApi } = require('@src/core/success/SuccessApi')

function home(req, res) {
    res.json(new SuccessApi({ data: { message: 'Hello world' } }))
}
module.exports = { home }
