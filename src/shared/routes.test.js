import {
  quotesEndpointRoute,
  orgNamesEndpointRoute,
  reviewsEndpointRoute,
} from './routes'

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

test('reviewsEndpointRoute', () => {
  expect(reviewsEndpointRoute()).toBe('/api/reviews/:organizationId')
  expect(reviewsEndpointRoute('https://www.braquet.io')).toBe('https://www.braquet.io/api/reviews/:organizationId')
  expect(reviewsEndpointRoute('https://www.braquet.io', '1234')).toBe('https://www.braquet.io/api/reviews/1234')
})
