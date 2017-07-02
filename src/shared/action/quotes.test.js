import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  getQuotesAsync,
  getQuotesAsyncRequest,
  getQuotesAsyncSuccess,
  getQuotesAsyncFailure,
} from './quotes'

import { quotesEndpointRoute } from '../../shared/routes'

const mockStore = configureMockStore([thunkMiddleware])

// jest syntax, read as "after each test, do this"
afterEach(() => {
  fetchMock.restore()
})

test('getQuotesAsync success', () => {
  fetchMock.get(quotesEndpointRoute(), [{ price: 1, name: 2 }])
  const store = mockStore()
  return store.dispatch(getQuotesAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        getQuotesAsyncRequest(),
        getQuotesAsyncSuccess([{ price: 1, name: 2 }]),
      ])
    })
})

test('getQuotesAsync 404', () => {
  fetchMock.get(quotesEndpointRoute(666), 404)
  const store = mockStore()
  return store.dispatch(getQuotesAsync(666))
    .then(() => {
      expect(store.getActions()).toEqual([
        getQuotesAsyncRequest(),
        getQuotesAsyncFailure(),
      ])
    })
})
