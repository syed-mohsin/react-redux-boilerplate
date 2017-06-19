// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/nav'
import Footer from './component/footer'
import HomePage from './component/page/home'
import BraquetHomePage from './component/page/braquet-home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  BRAQUET_HOME_PAGE_ROUTE,
} from './routes'

const App = () =>
  (
    <div style={{ paddingTop: 54 }}>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route exact path={BRAQUET_HOME_PAGE_ROUTE} render={() => <BraquetHomePage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  )

export default App
