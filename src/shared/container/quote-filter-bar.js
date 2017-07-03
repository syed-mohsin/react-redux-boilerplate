// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import FilterBar from '../component/filter-bar'

const mapStateToProps = (state, ownProps) => ({
  query: queryString.parse(ownProps.location.search),
})

export default withRouter(connect(mapStateToProps)(FilterBar))
