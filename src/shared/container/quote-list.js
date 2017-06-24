// @flow

import { connect } from 'react-redux'

import List from '../component/list'
import { getQuotesAsync } from '../action/quotes'

const mapStateToProps = state => ({
  items: state.quotes.get('quotes'),
  message: state.quotes.get('message'),
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  loadItems: () => { dispatch(getQuotesAsync()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
