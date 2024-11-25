const { home } = require('@src/controllers/home.controller')
const express = require('express')

const router = express.Router()

router.get('/', home)

module.exports = router
