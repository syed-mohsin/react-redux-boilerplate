// @flow

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import List from '../presentational/list'
import ReviewListItem from '../presentational/review-list-item'
import {
  getReviewsAsync,
  reviewsClear,
} from '../../action/reviews'

const mapStateToProps = state => ({
  items: state.reviews.get('reviews') || [],
  count: state.reviews.get('count') || 0,
  message: state.reviews.get('message'),
  data: { organizationId: state.reviews.get('organization').get('_id') },
  ListItem: ReviewListItem,
  listItemHandler: () => state.reviews.get('organization'),
})

const mapDispatchToProps = dispatch => ({
  loadItems: ({ organizationId }) => dispatch(getReviewsAsync(null, organizationId)),
  clearState: () => dispatch(reviewsClear()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
