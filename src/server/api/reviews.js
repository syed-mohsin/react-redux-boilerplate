// @flow

import mongoose from 'mongoose'

import { reviewsEndpointRoute } from '../../shared/routes'

export default (app: Object) => {
  const Review = mongoose.model('Review')

  app.get(reviewsEndpointRoute(), (req, res) => {
    Review.find({ organization: req.params.organizationId, verified: true })
      .sort('-created')
      .then(reviews => res.json(reviews))
      .catch(err => res.status(404).json(err))
  })
}
