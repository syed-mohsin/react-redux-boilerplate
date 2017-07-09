// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ORG_NAMES_ASYNC_REQUEST,
  ORG_NAMES_ASYNC_SUCCESS,
  ORG_NAMES_ASYNC_FAILURE,
} from '../action/organizations'

const initialState = Immutable.fromJS({
  names: [],
  message: '',
})

// organizations reducer
const organizationsReducer = (state: Immut = initialState,
  action: { type: string, payload: any }) => {
  switch (action.type) {
    case ORG_NAMES_ASYNC_REQUEST:
      return state.set('message', 'loading')
    case ORG_NAMES_ASYNC_SUCCESS:
      return state.merge({
        names: action.payload,
        message: 'success',
      })
    case ORG_NAMES_ASYNC_FAILURE:
      return state.set('message', 'failure')
    default:
      return state
  }
}

export default organizationsReducer
