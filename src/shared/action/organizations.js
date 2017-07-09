// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { orgNamesEndpointRoute } from '../../shared/routes'

export const ORG_NAMES_ASYNC_REQUEST = 'ORG_NAMES_ASYNC_REQUEST'
export const ORG_NAMES_ASYNC_SUCCESS = 'ORG_NAMES_ASYNC_SUCCESS'
export const ORG_NAMES_ASYNC_FAILURE = 'ORG_NAMES_ASYNC_FAILURE'

export const orgNamesAsyncRequest = createAction(ORG_NAMES_ASYNC_REQUEST)
export const orgNamesAsyncSuccess = createAction(ORG_NAMES_ASYNC_SUCCESS)
export const orgNamesAsyncFailure = createAction(ORG_NAMES_ASYNC_FAILURE)

export const orgNamesAsync = (domain: ?string) => (dispatch: Function) => {
  dispatch(orgNamesAsyncRequest())
  return fetch(orgNamesEndpointRoute(domain))
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      dispatch(orgNamesAsyncSuccess(data))
    })
    .catch(() => {
      dispatch(orgNamesAsyncFailure())
    })
}
