// @flow

import mongoose from 'mongoose'

const API_ORGANIZATIONS_NAMES_ROUTE = '/api/organizations/names'

export default (app: Object) => {
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
}
