// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import quotesReducer from '../shared/reducer/quotes'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.quotes) {
    // flow-disable-next-line
    preloadedState.quotes = quotesReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.quotes))
  }

  return createStore(combineReducers({ quotes: quotesReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
