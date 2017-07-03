// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import { SheetsRegistry, SheetsRegistryProvider } from 'react-jss'

import initStore from './init-store'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (location: string, plainPartialState: ?Object, existingStore: ?Object) => {
  const store = existingStore || initStore(plainPartialState)
  const sheets = new SheetsRegistry()
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={{}}>
        <SheetsRegistryProvider registry={sheets}>
          <App />
        </SheetsRegistryProvider>
      </StaticRouter>
    </Provider>)

  // must come after renderToString
  // head data for a page is extracted from components after
  // renderToString
  const head = Helmet.rewind()

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <style>
          html, body {
            height: 100%;
            margin: 0;
          }
          .js-app, .js-app > [data-reactroot] {
            height: 100%;
          }
          .main-app {
            min-height: 100%;
            margin-bottom: -50px;
          }
        </style>
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
