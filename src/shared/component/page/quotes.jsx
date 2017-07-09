// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import QuoteFilterBar from '../../container/quote-filter-bar'
import QuoteButtonGroup from '../../container/quote-button-group'
import QuoteResultsCount from '../../container/quote-results-count'
import QuoteList from '../../container/quote-list'
import QuotePaginator from '../../container/quote-paginator'

const styles = {}
const title = 'Quotes'

const QuotesPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'See all dem quotes' },
        { property: 'og:title', content: title },
      ]}
    />

    <QuoteFilterBar />
    <div className="container">
      <div className="row">
        <div className="col-xs-0 col-lg-2" />
        <div className="col-xs-12 col-lg-8">
          <QuoteButtonGroup />
          <QuoteList />
          <QuoteResultsCount />
          <QuotePaginator />
        </div>
        <div className="col-xs-0 col-lg-2" />
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(QuotesPage)
