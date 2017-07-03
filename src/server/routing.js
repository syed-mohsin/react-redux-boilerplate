// @flow

import {
  homePage,
  quotesPage,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  QUOTES_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(QUOTES_PAGE_ROUTE, (req, res) => {
    quotesPage(req.query).then((store) => {
      res.send(renderApp(req.url, null, store))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('ERR', err)
      res.status(404).send(renderApp(req.url))
    })
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

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
