// @flow

import mongoose from 'mongoose'

const API_ORGANIZATIONS_NAMES_ROUTE = '/api/organizations/names'
const API_ORGANIZATIONS_REDIRECT_ROUTE = '/api/organizations/:organizationId/redirect'

const addRef = url => (
  url.indexOf('?') !== -1 ? `${url}&ref=braquet.io` : `${url}?ref=braquet.io`
)

export default (app: Object) => {
  const Organization = mongoose.model('Organization')
  const Quote = mongoose.model('PriceReview')

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

  app.get(API_ORGANIZATIONS_REDIRECT_ROUTE, (req, res) => {
    Organization.findById(req.params.organizationId)
    .then((organization) => {
      res.redirect(addRef(organization.url))
    })
    .catch(() => {
      res.redirect('/')
    })
  })
}
