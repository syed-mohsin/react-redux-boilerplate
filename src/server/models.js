// @flow

import mongoose from 'mongoose'

import OrganizationSchema from './models/organization'
import QuoteSchema from './models/quote'
import ReviewSchema from './models/review'

export default () => {
  mongoose.model('Organization', OrganizationSchema)
  mongoose.model('PriceReview', QuoteSchema)
  mongoose.model('Review', ReviewSchema)
}
