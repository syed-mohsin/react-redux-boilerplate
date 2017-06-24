// @flow

import mongoose from 'mongoose'

import OrganizationSchema from './models/organization'
import QuoteSchema from './models/quote'

export default () => {
  mongoose.model('Organization', OrganizationSchema)
  mongoose.model('PriceReview', QuoteSchema)
}
