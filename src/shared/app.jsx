// @flow

import React from 'react'
import { Switch, Redirect } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/presentational/nav'
import Footer from './component/presentational/footer'
import HomePage from './component/page/home'
import QuotesPage from './component/page/quotes'
import FaqPage from './component/page/faq'
import TeamPage from './component/page/team'
import PrivacyPolicyPage from './component/page/privacy-policy'
// import NotFoundPage from './component/page/not-found'

import ScrollToTop from './component/presentational/scroll-to-top'
import ReviewList from './component/container/review-list'
import Modal from './component/presentational/modal'

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
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </div>
      <Modal title="Recent Reviews">
        <ReviewList />
      </Modal>
      <Footer />
    </div>
  )

export default App
