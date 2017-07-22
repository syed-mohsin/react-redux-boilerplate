// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import List from '../presentational/list'
import QuoteListItem from '../presentational/quote-list-item'
import { getQuotesAsync, quotesClear } from '../../action/quotes'
import { orgNamesAsync } from '../../action/organizations'
import { reviewsSetOrganization } from '../../action/reviews'

const mapStateToProps = (state, ownProps) => ({
  items: state.quotes.get('quotes') || [],
  count: state.quotes.get('count') || 0,
  message: state.quotes.get('message'),
  shouldScrollTop: true,
  data: queryString.parse(ownProps.location.search),
  ListItem: QuoteListItem,
})

const mapDispatchToProps = dispatch => ({
  loadItems: (query) => {
    dispatch(getQuotesAsync(null, query))
    dispatch(orgNamesAsync())
  },
  clearState: () => dispatch(quotesClear()),
  listItemHandler: organization => dispatch(reviewsSetOrganization(organization)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
