// @flow

import compression from 'compression'
import express from 'express'
import { Server } from 'http'
import socketIO from 'socket.io'
import mongoose from 'mongoose'

import routing from './routing'
import apiRouting from './api/routes'
import loadModels from './models'
import { WEB_PORT, STATIC_PATH, MONGODB_URI } from '../shared/config'
import { isProd } from '../shared/util'
import setUpSocket from './socket'

const app = express()

// initialize mongoose connection and load models
mongoose.connect(isProd ? process.env.MONGODB_URI : MONGODB_URI)
mongoose.Promise = global.Promise
loadModels()

// flow-disable-next-line
const http = Server(app)
const io = socketIO(http)
setUpSocket(io)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

apiRouting(app)
routing(app)

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
