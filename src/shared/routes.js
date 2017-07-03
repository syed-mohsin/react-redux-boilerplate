// @flow

import queryString from 'query-string'

export const HOME_PAGE_ROUTE = '/'
export const QUOTES_PAGE_ROUTE = '/quotes'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

export const quotesEndpointRoute = (domain: ?string, query: ?Object) => (
  `${domain || ''}/api/quotes/${query ? `?${queryString.stringify(query)}` : ''}`
)
