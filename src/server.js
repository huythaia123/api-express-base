/* import */
require('module-alias/register')
const cors = require('cors')
const http = require('node:http')
const express = require('express')
const compression = require('compression')
const { default: helmet } = require('helmet')
const env = require('./configs/env')
const initRoute = require('./routes')
const router404 = require('./routes/404')
const ErrorHandling = require('./middlewares/ErrorHandling')
/* ------------------------------------------------------------------------- */

const port = env.PORT
const app = express()
const server = http.createServer(app)

/* middleware */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression({ level: -1 }))
app.use(
    cors({
        origin: '*',
        methods: ['*'],
        allowedHeaders: ['*'],
        exposedHeaders: [],
        credentials: false,
        maxAge: 0,
        preflightContinue: false,
        optionsSuccessStatus: 200,
    }),
)

/* Serving static files in Express */
app.use('/public', express.static(`${process.cwd()}/public`))

/* Routing */
app.use('/api', initRoute)

/* 404 error */
app.use(router404)

/* error handling */
app.use(ErrorHandling)

/* ------------------------------------------------------------------------- */
server.listen(port, () => {
    console.log('App running on port: ' + port)
})
