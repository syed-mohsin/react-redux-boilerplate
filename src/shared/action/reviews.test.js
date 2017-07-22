import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  getReviewsAsync,
  getReviewsAsyncRequest,
  getReviewsAsyncSuccess,
  getReviewsAsyncFailure,
  reviewsClear,
} from './reviews'

import { reviewsEndpointRoute } from '../../shared/routes'

const mockStore = configureMockStore([thunkMiddleware])

// jest syntax, read as "after each test, do this"
afterEach(() => {
  fetchMock.restore()
})

test('getReviewsAsync success', () => {
  fetchMock.get(reviewsEndpointRoute(null, '1234'), [{ companyName: 'Suniva', rating: 1 }])
  const store = mockStore()
  return store.dispatch(getReviewsAsync(null, '1234'))
    .then(() => {
      expect(store.getActions()).toEqual([
        getReviewsAsyncRequest(),
        getReviewsAsyncSuccess([{ companyName: 'Suniva', rating: 1 }]),
      ])
    })
})

test('getReviewsAsync 404', () => {
  fetchMock.get(reviewsEndpointRoute(null, '666'), 404)
  const store = mockStore()
  return store.dispatch(getReviewsAsync(null, '666'))
    .then(() => {
      expect(store.getActions()).toEqual([
        getReviewsAsyncRequest(),
        getReviewsAsyncFailure(),
      ])
    })
})

test('getReviewsAsync no ID', () => {
  fetchMock.get(reviewsEndpointRoute(), 404)
  const store = mockStore()
  return store.dispatch(getReviewsAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        reviewsClear(),
      ])
    })
})
