import Immutable from 'immutable'

import {
  quotesClear,
  getQuotesAsyncRequest,
  getQuotesAsyncSuccess,
  getQuotesAsyncFailure,
} from '../action/quotes'

import quotesReducer from './quotes'

let quotesState

// jest syntax
beforeEach(() => {
  quotesState = quotesReducer(undefined, {})
})

test('handle default', () => {
  expect(quotesState.get('quotes')).toBe(Immutable.fromJS([]))
  expect(quotesState.get('message')).toBe('')
})

test('handle reset to initial state', () => {
  quotesState = quotesReducer(quotesState, quotesClear())
  expect(quotesState.get('quotes')).toBe(Immutable.fromJS([]))
  expect(quotesState.get('message')).toBe('')
})

test('handle QUOTES_ASYNC_REQUEST', () => {
  quotesState = quotesReducer(quotesState, getQuotesAsyncRequest())
  expect(quotesState.get('message')).toBe('loading')
})

test('handle QUOTES_ASYNC_SUCCESS', () => {
  const result = { quotes: [{ price: 1, name: 2 }], count: 1 }
  quotesState = quotesReducer(quotesState, getQuotesAsyncSuccess(result))
  expect(quotesState.get('message')).toBe('success')
  expect(quotesState.get('count')).toBe(1)
  expect(Immutable.is(quotesState.get('quotes'), Immutable.fromJS(result.quotes))).toBe(true)
})

test('handle QUOTES_ASYNC_SUCCESS no data', () => {
  quotesState = quotesReducer(quotesState, getQuotesAsyncSuccess())
  expect(quotesState.get('message')).toBe('success')
  expect(quotesState.get('count')).toBe(0)
  expect(quotesState.get('quotes')).toBe(Immutable.fromJS([]))
})

test('handle QUOTES_ASYNC_FAILURE', () => {
  quotesState = quotesReducer(quotesState, getQuotesAsyncFailure())
  expect(quotesState.get('message')).toBe('failure')
  expect(quotesState.get('count')).toBe(undefined)
})
