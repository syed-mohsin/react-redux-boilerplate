// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { reviewsEndpointRoute } from '../../shared/routes'

export const REVIEWS_ASYNC_REQUEST = 'REVIEWS_ASYNC_REQUEST'
export const REVIEWS_ASYNC_SUCCESS = 'REVIEWS_ASYNC_SUCCESS'
export const REVIEWS_ASYNC_FAILURE = 'REVIEWS_ASYNC_FAILURE'
export const REVIEWS_CLEAR = 'REVIEWS_CLEAR'
export const REVIEWS_SET_ORGANIZATION = 'REVIEWS_SET_ORGANIZATION'

export const getReviewsAsyncRequest = createAction(REVIEWS_ASYNC_REQUEST)
export const getReviewsAsyncSuccess = createAction(REVIEWS_ASYNC_SUCCESS)
export const getReviewsAsyncFailure = createAction(REVIEWS_ASYNC_FAILURE)
export const reviewsClear = createAction(REVIEWS_CLEAR)
export const reviewsSetOrganization = createAction(REVIEWS_SET_ORGANIZATION)

export const getReviewsAsync = (domain: ?string, organizationId: string) =>
(dispatch: Function) => {
  if (!organizationId || organizationId === ':organizationId') {
    return new Promise(resolve => resolve(dispatch(reviewsClear())))
  }

  dispatch(getReviewsAsyncRequest())
  return fetch(reviewsEndpointRoute(domain, organizationId))
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      dispatch(getReviewsAsyncSuccess(data))
    })
    .catch(() => {
      dispatch(getReviewsAsyncFailure())
    })
}
