// @flow

import path from 'path'
import express from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
import cookieSession from 'cookie-session'

import routing from './routing'
// import loadModels from './models'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'

const app = express()

// initialize mongoose connection and load models
// mongoose.connect(isProd ? process.env.MONGODB_URI || MONGODB_URI : MONGODB_URI)
// mongoose.Promise = global.Promise
// loadModels()

// flow-disable-next-line
const http = Server(app)

// app.use((req, res, next) => {
//   if (!isProd || req.headers['x-forwarded-proto'] === 'https') {
//     // OK, continue
//     return next()
//   }
//
//   return res.redirect(`https://${req.hostname}${req.url}`)
// })

// set up middleware to use gzipped js files
app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`
  res.set('Content-Encoding', 'gzip')
  next()
})

app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY || 'cat_board_key'],

  maxAge: 365 * 24 * 60 * 60 * 1000,
}))

// get robots.txt
app.use('/robots.txt', (req, res) => {
  res.sendFile(path.resolve('./public/robots.txt'))
})

routing(app)

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
