// @flow

import mongoose from 'mongoose'

const API_QUOTES_ROUTE = '/api/quotes'

export default (app: Object) => {
  const Quote = mongoose.model('PriceReview')

  app.get(API_QUOTES_ROUTE, (req, res) => {
    const queryObj = {}
    const sortObj = {}

    // build query for quantity and paneltype filters
    if (req.query.quantity && req.query.quantity !== 'all') queryObj.quantity = req.query.quantity
    if (req.query.panelType && req.query.panelType !== 'all') queryObj.panelType = req.query.panelType

    // build query for search using regular expression
    // escape passed in string
    if (req.query.brandSearch) {
      const escapedString = req.query.brandSearch.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
      queryObj.manufacturer = new RegExp(escapedString, 'i')
    }

    // handle sorting
    if (req.query.sortBy) {
      const sortParam = req.query.sortBy

      if (sortParam === 'recent') sortObj.quoteDate = -1
      else if (sortParam === 'price-low') sortObj.price = 1
      else if (sortParam === 'price-high') sortObj.price = -1
      else if (sortParam === 'wattage') sortObj.stcPower = -1
    } else {
      sortObj.quoteDate = -1
    }

    const findPromise = Quote.find(queryObj)
    .populate('organization', 'companyName url logoImageUrl')
    .sort(sortObj)
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
