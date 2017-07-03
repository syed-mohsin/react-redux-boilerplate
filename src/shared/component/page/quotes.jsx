// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import QuoteFilterBar from '../../container/quote-filter-bar'
import QuoteButtonGroup from '../../container/quote-button-group'
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
        <div className="col-2" />
        <div className="col-8">
          <QuoteButtonGroup />
          <QuoteList />
          <QuotePaginator />
        </div>
        <div className="col-2" />
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(QuotesPage)
