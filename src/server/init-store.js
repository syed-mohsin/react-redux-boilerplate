// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import quotesReducer from '../shared/reducer/quotes'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
  }
  if (plainPartialState && plainPartialState.quotes) {
    // flow-disable-next-line
    preloadedState.quotes = quotesReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.quotes))
  }

  return createStore(combineReducers({ hello: helloReducer, quotes: quotesReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
