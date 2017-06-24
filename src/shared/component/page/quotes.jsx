// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import QuoteList from '../../container/quote-list'
// import List from '../list'

const styles = {}
const title = 'Quotes'
// { classes }: { classes: Object }
const QuotesPage = () =>
  (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'See all dem quotes' },
          { property: 'og:title', content: title },
        ]}
      />
      <QuoteList />
    </div>
  )

export default injectSheet(styles)(QuotesPage)
