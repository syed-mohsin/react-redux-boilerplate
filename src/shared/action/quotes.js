// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { quotesEndpointRoute } from '../../shared/routes'

export const GET_QUOTES_ASYNC_REQUEST = 'GET_QUOTES_ASYNC_REQUEST'
export const GET_QUOTES_ASYNC_SUCCESS = 'GET_QUOTES_ASYNC_SUCCESS'
export const GET_QUOTES_ASYNC_FAILURE = 'GET_QUOTES_ASYNC_FAILURE'

export const getQuotesAsyncRequest = createAction(GET_QUOTES_ASYNC_REQUEST)
export const getQuotesAsyncSuccess = createAction(GET_QUOTES_ASYNC_SUCCESS)
export const getQuotesAsyncFailure = createAction(GET_QUOTES_ASYNC_FAILURE)

export const getQuotesAsync = (domain: ?string) => (dispatch: Function) => {
  dispatch(getQuotesAsyncRequest())
  return fetch(quotesEndpointRoute(domain))
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
