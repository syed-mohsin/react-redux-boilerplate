// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import queryString from 'query-string'

import ResultsCount from '../component/results-count'

const ITEMS_PER_PAGE = 15


const mapStateToProps = (state, ownProps) => ({
  totalCount: state.quotes.get('count') || 0,
  itemsPerPage: ITEMS_PER_PAGE,
  itemsOnCurrentPage: state.quotes.get('quotes') ? state.quotes.get('quotes').size : undefined,
  currentPage: parseInt(queryString.parse(ownProps.location.search).page, 10) || 1,
})

export default withRouter(connect(mapStateToProps)(ResultsCount))
