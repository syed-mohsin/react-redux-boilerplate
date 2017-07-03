import { quotesEndpointRoute } from './routes'

test('quotesEndpointRoute', () => {
  expect(quotesEndpointRoute()).toBe('/api/quotes/')
  expect(quotesEndpointRoute('https://www.braquet.io')).toBe('https://www.braquet.io/api/quotes/')
  expect(quotesEndpointRoute('https://www.braquet.io', { page: 3, panelType: 'Poly' }))
    .toBe('https://www.braquet.io/api/quotes/?page=3&panelType=Poly')
})
