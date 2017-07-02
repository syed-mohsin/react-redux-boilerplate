// @flow

import { getQuotesAsync } from '../shared/action/quotes'
import initStore from './init-store'

export const homePage = () => null

export const braquetHomePage = () => null

export const quotesPage = (query: Object) => {
  const store = initStore()
  return new Promise((resolve, reject) => {
    store.dispatch(getQuotesAsync(process.env.DOMAIN || 'http://localhost:3000', query))
    .then(() => resolve(store))
    .catch(() => reject())
  })
}

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
