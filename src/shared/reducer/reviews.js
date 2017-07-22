// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  REVIEWS_ASYNC_REQUEST,
  REVIEWS_ASYNC_SUCCESS,
  REVIEWS_ASYNC_FAILURE,
  REVIEWS_CLEAR,
  REVIEWS_SET_ORGANIZATION,
} from '../action/reviews'

const initialState = Immutable.fromJS({
  reviews: [],
  message: '',
  organization: {},
})

// reviews reducer
const reviewsReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case REVIEWS_ASYNC_REQUEST:
      return state.set('message', 'loading')
    case REVIEWS_ASYNC_SUCCESS:
      return state.merge({
        reviews: action.payload ? action.payload : [],
        message: 'success',
      })
    case REVIEWS_ASYNC_FAILURE:
      return state.set('message', 'failure')
    case REVIEWS_CLEAR:
      return initialState
    case REVIEWS_SET_ORGANIZATION:
      return state.merge({
        organization: action.payload,
      })
    default:
      return state
  }
}

export default reviewsReducer
