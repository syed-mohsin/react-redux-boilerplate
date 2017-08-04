// @flow

import React from 'react'
import { Switch, Redirect } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import HomePage from './component/page/home'

import ScrollToTop from './component/presentational/scroll-to-top'

import {
  HOME_PAGE_ROUTE,
} from './routes'

const App = () =>
  (
    <div>
      <div className="main-app">
        <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
        <ScrollToTop>
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
    </div>
  )

export default App
