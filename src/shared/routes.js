// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'
export const BRAQUET_HOME_PAGE_ROUTE = '/braquet'
export const QUOTES_PAGE_ROUTE = '/quotes'

export const helloEndpointRoute = (num ?: number) => `/ajax/hello/${num || ':num'}`
export const quotesEndpointRoute = () => '/api/quotes/'
