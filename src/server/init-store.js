// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import quotesReducer from '../shared/reducer/quotes'
import organizationsReducer from '../shared/reducer/organizations'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  const reducers = {
    quotes: quotesReducer,
    organizations: organizationsReducer,
  }

  if (plainPartialState && plainPartialState.quotes) {
    // flow-disable-next-line
    preloadedState.quotes = quotesReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.quotes))
  }

  if (plainPartialState && plainPartialState.organizations) {
    // flow-disable-next-line
    preloadedState.organizations = organizationsReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.organizations))
  }

  return createStore(combineReducers(reducers),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
