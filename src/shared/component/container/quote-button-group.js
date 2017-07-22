// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import ButtonGroup from '../presentational/button-group'

const onChange = (history, location) => (event: Object) => {
  if (!event.target.value) return

  const query = queryString.parse(location.search)
  query.page = 1
  query.sortBy = event.target.value
  history.push(`${location.pathname}?${queryString.stringify(query)}`)
}

const mapStateToProps = (state, ownProps) => ({
  query: queryString.parse(ownProps.location.search),
  onChange: onChange(ownProps.history, ownProps.location),
})

export default withRouter(connect(mapStateToProps)(ButtonGroup))
