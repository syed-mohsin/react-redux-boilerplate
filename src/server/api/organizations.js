// @flow

import mongoose from 'mongoose'

import {
  API_ORGANIZATIONS_NAMES_ROUTE,
  organizationRedirectEndpointRoute,
} from '../../shared/routes'

import addSpreadSheetRow from '../spreadsheet'

const addRef = url => (
  url.indexOf('?') !== -1 ? `${url}&ref=braquet.io` : `${url}?ref=braquet.io`
)

export default (app: Object) => {
  const Organization = mongoose.model('Organization')
  const Quote = mongoose.model('PriceReview')

  // api endpoint to fetch brand names
  app.get(API_ORGANIZATIONS_NAMES_ROUTE, (req, res) => {
    Quote.distinct('manufacturer')
    .exec()
    .then((organizations) => {
      // only return organizations that have panels to offer
      res.json(organizations)
    })
    .catch((err) => {
      res.json(err)
    })
  })

  // handle redirecting user to a matching supplier page
  app.get(organizationRedirectEndpointRoute(), (req, res, next) => {
    Organization.findById(req.params.organizationId)
    .then((organization) => {
      res.redirect(addRef(organization.url))

      const rowData = Object.assign({}, {
        uuid: req.session.v,
        name: organization.companyName,
        url: addRef(organization.url),
        date: new Date(),
      }, req.query)

      res.rowData = rowData
      next()
    })
    .catch(() => {
      res.redirect('/')
    })
  })

  // spreadsheet logging middleware
  app.use(organizationRedirectEndpointRoute(), (req, res) => {
    if (res.rowData) {
      addSpreadSheetRow(res.rowData)
      .then(() => {})
      // eslint-disable-next-line no-console
      .catch((e) => { console.log('spreadsheet error', e) })
    }
  })
}
