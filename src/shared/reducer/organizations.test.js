import Immutable from 'immutable'

import {
  orgNamesAsyncRequest,
  orgNamesAsyncSuccess,
  orgNamesAsyncFailure,
} from '../action/organizations'

import organizationsReducer from './organizations'

let organizationsState

// jest syntax
beforeEach(() => {
  organizationsState = organizationsReducer(undefined, {})
})

test('handle default', () => {
  expect(organizationsState.get('names')).toBe(Immutable.fromJS([]))
  expect(organizationsState.get('message')).toBe('')
})

test('handle ORG_NAME_ASYNC_REQUEST', () => {
  organizationsState = organizationsReducer(organizationsState, orgNamesAsyncRequest())
  expect(organizationsState.get('names')).toBe(Immutable.fromJS([]))
  expect(organizationsState.get('message')).toBe('loading')
})

test('handle ORG_NAME_ASYNC_SUCCESS', () => {
  const result = [{ price: 1, name: 2 }]
  organizationsState = organizationsReducer(organizationsState, orgNamesAsyncSuccess(result))
  expect(Immutable.is(organizationsState.get('names'), Immutable.fromJS(result))).toBe(true)
  expect(organizationsState.get('message')).toBe('success')
})

test('handle ORG_NAME_ASYNC_SUCCESS no data', () => {
  organizationsState = organizationsReducer(organizationsState, orgNamesAsyncSuccess())
  expect(organizationsState.get('message')).toBe('success')
  expect(organizationsState.get('names')).toBe(undefined)
})

test('handle ORG_NAME_ASYNC_FAILURE', () => {
  organizationsState = organizationsReducer(organizationsState, orgNamesAsyncFailure())
  expect(organizationsState.get('message')).toBe('failure')
})
