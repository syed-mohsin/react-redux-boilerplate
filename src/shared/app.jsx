// @flow

import React from 'react'
import { Switch, Redirect } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/nav'
import Footer from './component/footer'
import HomePage from './component/page/home'
import QuotesPage from './component/page/quotes'
import FaqPage from './component/page/faq'
import TeamPage from './component/page/team'
import PrivacyPolicyPage from './component/page/privacy-policy'
// import NotFoundPage from './component/page/not-found'

import ScrollToTop from './component/scroll-to-top'

import {
  HOME_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
  PRIVACY_POLICY_PAGE_ROUTE,
  QUOTES_PAGE_ROUTE,
} from './routes'

const App = () =>
  (
    <div>
      <div className="main-app" style={{ paddingTop: 54 }}>
        <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
            <Route path={QUOTES_PAGE_ROUTE} component={QuotesPage} />
            <Route path={FAQ_PAGE_ROUTE} component={FaqPage} />
            <Route path={TEAM_PAGE_ROUTE} component={TeamPage} />
            <Route path={PRIVACY_POLICY_PAGE_ROUTE} component={PrivacyPolicyPage} />
            {/* <Route component={NotFoundPage} /> */}
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  )

export default App
