// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  QUOTES_ASYNC_REQUEST,
  QUOTES_ASYNC_SUCCESS,
  QUOTES_ASYNC_FAILURE,
  QUOTES_CLEAR,
} from '../action/quotes'

const initialState = Immutable.fromJS({
  quotes: [],
  message: '',
})

// quotes reducer
const quotesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case QUOTES_ASYNC_REQUEST:
      return state.set('message', 'loading')
    case QUOTES_ASYNC_SUCCESS:
      // eslint-disable-next-line no-console
      console.log('payload!', action.payload)
      return state.merge({
        quotes: action.payload ? action.payload.quotes : [],
        count: action.payload ? action.payload.count : 0,
        message: 'success',
      })
    case QUOTES_ASYNC_FAILURE:
      return state.set('message', 'failure')
    case QUOTES_CLEAR:
      return initialState
    default:
      return state
  }
}

export default quotesReducer
