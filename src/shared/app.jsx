// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/nav'
import Footer from './component/footer'
import HomePage from './component/page/home'
import FaqPage from './component/page/faq'
import TeamPage from './component/page/team'
import QuotesPage from './component/page/quotes'
import NotFoundPage from './component/page/not-found'

import {
  HOME_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
  QUOTES_PAGE_ROUTE,
} from './routes'

const App = () =>
  (
    <div>
      <div className="main-app" style={{ paddingTop: 54 }}>
        <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
        <Nav />
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
          <Route path={FAQ_PAGE_ROUTE} component={FaqPage} />
          <Route path={TEAM_PAGE_ROUTE} component={TeamPage} />
          <Route path={QUOTES_PAGE_ROUTE} component={QuotesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  )

export default App
