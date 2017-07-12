// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import List from '../component/list'
import { getQuotesAsync, quotesClear } from '../action/quotes'
import { orgNamesAsync } from '../action/organizations'

const mapStateToProps = (state, ownProps) => ({
  items: state.quotes.get('quotes'),
  count: state.quotes.get('count'),
  message: state.quotes.get('message'),
  query: queryString.parse(ownProps.location.search),
})

const mapDispatchToProps = dispatch => ({
  loadItems: query => dispatch(getQuotesAsync(null, query)),
  loadNames: () => dispatch(orgNamesAsync()),
  clearState: () => dispatch(quotesClear()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
