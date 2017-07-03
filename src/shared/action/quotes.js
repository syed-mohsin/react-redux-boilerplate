// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { quotesEndpointRoute } from '../../shared/routes'

export const QUOTES_ASYNC_REQUEST = 'QUOTES_ASYNC_REQUEST'
export const QUOTES_ASYNC_SUCCESS = 'QUOTES_ASYNC_SUCCESS'
export const QUOTES_ASYNC_FAILURE = 'QUOTES_ASYNC_FAILURE'
export const QUOTES_CLEAR = 'QUOTES_CLEAR'

export const getQuotesAsyncRequest = createAction(QUOTES_ASYNC_REQUEST)
export const getQuotesAsyncSuccess = createAction(QUOTES_ASYNC_SUCCESS)
export const getQuotesAsyncFailure = createAction(QUOTES_ASYNC_FAILURE)
export const quotesClear = createAction(QUOTES_CLEAR)

export const getQuotesAsync = (domain: ?string, query: ?Object) => (dispatch: Function) => {
  dispatch(getQuotesAsyncRequest())
  return fetch(quotesEndpointRoute(domain, query))
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      dispatch(getQuotesAsyncSuccess(data))
    })
    .catch(() => {
      dispatch(getQuotesAsyncFailure())
    })
}
