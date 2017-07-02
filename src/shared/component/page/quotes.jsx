// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import QuoteList from '../../container/quote-list'
import QuotePaginator from '../../container/quote-paginator'

// type Props = {
//   history: Object,
//   location: Object,
// }

const styles = {}
const title = 'Quotes'
// { classes }: { classes: Object }

const QuotesPage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'See all dem quotes' },
        { property: 'og:title', content: title },
      ]}
    />

    {// need a filter bar component <FilterBar />
    // need a sorting component <SortContainer />
    // should quote page be a container?
    }
    <div className="container">
      <div className="row no-gutters">
        <div className="col-2" />
        <div className="col-8">
          <QuotePaginator />
          <QuoteList />
          <QuotePaginator />
        </div>
        <div className="col-2" />
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(QuotesPage)
