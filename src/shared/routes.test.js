import { quotesEndpointRoute, orgNamesEndpointRoute } from './routes'

test('orgNamesEndpointRoute', () => {
  expect(orgNamesEndpointRoute()).toBe('/api/organizations/names')
  expect(orgNamesEndpointRoute('https://www.braquet.io')).toBe('https://www.braquet.io/api/organizations/names')
})

test('quotesEndpointRoute', () => {
  expect(quotesEndpointRoute()).toBe('/api/quotes')
  expect(quotesEndpointRoute('https://www.braquet.io')).toBe('https://www.braquet.io/api/quotes')
  expect(quotesEndpointRoute('https://www.braquet.io', { page: 3, panelType: 'Poly' }))
    .toBe('https://www.braquet.io/api/quotes/?page=3&panelType=Poly')
})
