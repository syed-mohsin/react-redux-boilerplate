// @flow

import { getQuotesAsync } from '../shared/action/quotes'
import initStore from './init-store'

export const homePage = () => null

export const quotesPage = (query: Object) => {
  const store = initStore()
  return new Promise((resolve, reject) => {
    store.dispatch(getQuotesAsync(process.env.DOMAIN || 'http://localhost:3000', query))
    .then(() => resolve(store))
    .catch(() => reject())
  })
}
