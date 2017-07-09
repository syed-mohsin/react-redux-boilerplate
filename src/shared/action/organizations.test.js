import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  orgNamesAsync,
  orgNamesAsyncRequest,
  orgNamesAsyncSuccess,
  orgNamesAsyncFailure,
} from './organizations'

import { orgNamesEndpointRoute } from '../../shared/routes'

const mockStore = configureMockStore([thunkMiddleware])

// jest syntax, read as "after each test, do this"
afterEach(() => {
  fetchMock.restore()
})

test('orgNameAsync success', () => {
  fetchMock.get(orgNamesEndpointRoute(), [{ price: 1, name: 2 }])
  const store = mockStore()
  return store.dispatch(orgNamesAsync())
    .then(() => {
      expect(store.getActions()).toEqual([
        orgNamesAsyncRequest(),
        orgNamesAsyncSuccess([{ price: 1, name: 2 }]),
      ])
    })
})

test('orgNameAsync 404', () => {
  fetchMock.get(orgNamesEndpointRoute(666), 404)
  const store = mockStore()
  return store.dispatch(orgNamesAsync(666))
    .then(() => {
      expect(store.getActions()).toEqual([
        orgNamesAsyncRequest(),
        orgNamesAsyncFailure(),
      ])
    })
})
