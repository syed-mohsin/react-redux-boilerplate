// @flow

import quotesRoutes from './quotes'
import organizationRoutes from './organizations'
import reviewsRoutes from './reviews'

export default (app: Object) => {
  quotesRoutes(app)
  organizationRoutes(app)
  reviewsRoutes(app)
}
