// @flow

import quotesRoutes from './quotes'
import organizationRoutes from './organizations'

export default (app: Object) => {
  quotesRoutes(app)
  organizationRoutes(app)
}
