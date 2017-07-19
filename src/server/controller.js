// @flow

import { getQuotesAsync } from '../shared/action/quotes'
import { orgNamesAsync } from '../shared/action/organizations'
import initStore from './init-store'

export const homePage = () => null

export const FaqPage = () => null

export const TeamPage = () => null

export const PrivacyPolicyPage = () => null

export const quotesPage = (query: Object) => {
  const store = initStore()
  return new Promise((resolve, reject) => {
    const domain = process.env.DOMAIN || 'http://localhost:3000'
    const dispatches = Promise.all([
      store.dispatch(getQuotesAsync(domain, query)),
      store.dispatch(orgNamesAsync(domain)),
    ])

    dispatches
    .then(() => resolve(store))
    .catch(() => reject())
  })
}
