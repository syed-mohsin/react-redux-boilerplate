// @flow

import mongoose from 'mongoose'

const API_GET_QUOTES_ROUTE = '/api/quotes'

export default (app: Object) => {
  const Quote = mongoose.model('PriceReview')

  app.get(API_GET_QUOTES_ROUTE, (req, res) => {
    const queryObj = {}

    if (req.query.panelType) queryObj.panelType = req.query.panelType

    const findPromise = Quote.find(queryObj)
    .populate('organization')
    .sort('-quoteDate')
    .skip((req.query.page - 1 || 0) * 15)
    .limit(15)
    .exec()

    const countPromise = Quote.find(queryObj).count().exec()

    const promises = [findPromise, countPromise]
    Promise.all(promises)
    .then((results) => {
      const [quotes, count] = results
      res.json({ quotes, count })
    })
    .catch((err) => {
      res.json(err)
    })
  })
}
