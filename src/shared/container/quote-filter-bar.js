// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import $ from 'jquery'

import FilterBar from '../component/filter-bar'

const onChange = (history, location) => (items) => {
  const query = queryString.parse(location.search)
  query.page = 1
  query.brandSearch = items.length ? items[0] : query.brandSearch || ''
  // history.push(`${location.pathname}?${queryString.stringify(query)}`)
  $('body').scrollTop(0)
}

const mapStateToProps = (state, ownProps) => ({
  query: queryString.parse(ownProps.location.search),
  orgs: state.organizations.get('names'),
  onChange: onChange(ownProps.history, ownProps.location),
})

export default withRouter(connect(mapStateToProps)(FilterBar))
