// @flow

import uuid from 'uuid/v1'

import {
  homePage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
} from '../shared/routes'

import apiRouting from './api/routes'

import renderApp from './render-app'

export default (app: Object) => {
  // middleware to add cookie id if none exists
  app.use((req, res, next) => {
    if (!req.session.v) {
      req.session.v = uuid()
    }

    next()
  })

  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  // Add API routes
  apiRouting(app)

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
