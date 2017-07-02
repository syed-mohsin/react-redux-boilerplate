// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import List from '../component/list'
import { getQuotesAsync } from '../action/quotes'

const mapStateToProps = (state, ownProps) => ({
  items: state.quotes.get('quotes'),
  count: state.quotes.get('count'),
  message: state.quotes.get('message'),
  query: queryString.parse(ownProps.location.search),
})

const mapDispatchToProps = dispatch => ({
  loadItems: query => dispatch(getQuotesAsync(null, query)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
