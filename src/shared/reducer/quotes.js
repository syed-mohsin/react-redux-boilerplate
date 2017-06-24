// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  GET_QUOTES_ASYNC_REQUEST,
  GET_QUOTES_ASYNC_SUCCESS,
  GET_QUOTES_ASYNC_FAILURE,
} from '../action/quotes'

const initialState = Immutable.fromJS({ // creates an ImmutableJS collection
  quotes: [],
  message: '',
})

// quotes reducer
const quotesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_QUOTES_ASYNC_REQUEST:
      return state.set('message', 'loading')
    case GET_QUOTES_ASYNC_SUCCESS:
      // eslint-disable-next-line no-console
      console.log('success', action)
      return state.merge({ quotes: action.payload, message: 'success' })
    case GET_QUOTES_ASYNC_FAILURE:
      return state.set('message', 'failure')
    default:
      return state
  }
}

export default quotesReducer
