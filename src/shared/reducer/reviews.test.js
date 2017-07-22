import Immutable from 'immutable'

import {
  reviewsClear,
  getReviewsAsyncRequest,
  getReviewsAsyncSuccess,
  getReviewsAsyncFailure,
  reviewsSetOrganization,
} from '../action/reviews'

import reviewsReducer from './reviews'

let reviewsState

// jest syntax
beforeEach(() => {
  reviewsState = reviewsReducer(undefined, {})
})

test('handle default', () => {
  expect(reviewsState.get('reviews')).toBe(Immutable.fromJS([]))
  expect(reviewsState.get('message')).toBe('')
  expect(Immutable.is(reviewsState.get('organization'), Immutable.fromJS({}))).toBe(true)
})

test('handle reset to initial state', () => {
  reviewsState = reviewsReducer(reviewsState, reviewsClear())
  expect(reviewsState.get('reviews')).toBe(Immutable.fromJS([]))
  expect(reviewsState.get('message')).toBe('')
  expect(Immutable.is(reviewsState.get('organization'), Immutable.fromJS({}))).toBe(true)
})

test('set organization for review', () => {
  const org = { name: 'Suniva', avg_review: 1 }
  reviewsState = reviewsReducer(reviewsState, reviewsSetOrganization(org))
  expect(Immutable.is(reviewsState.get('organization'), Immutable.fromJS(org))).toBe(true)
})

test('handle QUOTES_ASYNC_REQUEST', () => {
  reviewsState = reviewsReducer(reviewsState, getReviewsAsyncRequest())
  expect(reviewsState.get('message')).toBe('loading')
})

test('handle QUOTES_ASYNC_SUCCESS', () => {
  const result = [{ title: 'noice', rating: 5 }]
  reviewsState = reviewsReducer(reviewsState, getReviewsAsyncSuccess(result))
  expect(reviewsState.get('message')).toBe('success')
  expect(Immutable.is(reviewsState.get('reviews'), Immutable.fromJS(result))).toBe(true)
})

test('handle QUOTES_ASYNC_SUCCESS no data', () => {
  reviewsState = reviewsReducer(reviewsState, getReviewsAsyncSuccess())
  expect(reviewsState.get('message')).toBe('success')
  expect(reviewsState.get('reviews')).toBe(Immutable.fromJS([]))
})

test('handle QUOTES_ASYNC_FAILURE', () => {
  reviewsState = reviewsReducer(reviewsState, getReviewsAsyncFailure())
  expect(reviewsState.get('message')).toBe('failure')
})
