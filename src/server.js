/* import */
require('module-alias/register')
const cors = require('cors')
const morgan = require('morgan')
const http = require('node:http')
const express = require('express')
const compression = require('compression')
const { default: helmet } = require('helmet')
const { default: mongoose } = require('mongoose')
const env = require('./configs/env')
const initRoute = require('./routes')
const router404 = require('./routes/404')
const ErrorHandling = require('./middlewares/ErrorHandling')
/* ------------------------------------------------------------------------- */

/* corsSetting */
const corsSetting = {
  origin: '*',
  methods: ['*'],
  allowedHeaders: ['*'],
  exposedHeaders: [],
  credentials: false,
  maxAge: 0,
  preflightContinue: false,
  optionsSuccessStatus: 200,
}

/* app */
const PORT = env.PORT
const app = express()
const server = http.createServer(app)

/* middleware */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))
app.use(compression({ level: -1 }))
app.use(cors(corsSetting))

/* connect mongodb */
mongoose
  .connect(env.MONGO_URI)
  .then(function () {
    console.log(`MongoDB Connected.`)
  })
  .catch(function (err) {
    throw err
  })
mongoose.connection.on('disconnected', function () {
  console.log(`${__filename}: Mongoose disconnected from MongoDB.`)
})
mongoose.connection.on('error', function (err) {
  console.error(`${__filename}: Mongoose connection error:`, err)
})

/* Serving static files in Express */
app.use('/public', express.static(`${process.cwd()}/public`))

/* Routing */
app.use('/api', initRoute)

/* 404 error */
app.use(router404)

/* error handling */
app.use(ErrorHandling)

/* ------------------------------------------------------------------------- */
server.listen(PORT, () => {
  console.log('App running on port: ' + PORT)
})
