// @flow

import mongoose from 'mongoose'

const API_GET_QUOTES_ROUTE = '/api/quotes'

export default (app: Object) => {
  const Quote = mongoose.model('PriceReview')

  app.get(API_GET_QUOTES_ROUTE, (req, res) => {
    Quote.find()
    .populate('organization')
    .sort('-quoteDate')
    .limit(100)
    .exec()
    .then((quotes) => {
      res.json(quotes)
    })
    .catch((err) => {
      res.json(err)
    })
  })
}
