const { home } = require('@src/controllers/home.controller')
const express = require('express')

const router = express.Router()

// [get] /api
router.get('/', home)

module.exports = router
