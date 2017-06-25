import { helloEndpointRoute, quotesEndpointRoute } from './routes'

test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(1234)).toBe('/ajax/hello/1234')
})

test('quotesEndpointRoute', () => {
  expect(quotesEndpointRoute()).toBe('/api/quotes/')
  expect(quotesEndpointRoute('https://www.braquet.io')).toBe('https://www.braquet.io/api/quotes/')
})
