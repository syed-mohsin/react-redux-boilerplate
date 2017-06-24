// @flow

/**
 * Module dependencies.
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema

/**
 * Organization Schema
 */
const OrganizationSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  verified: {
    type: Boolean,
  },
  companyName: {
    type: String,
    required: 'Organization name is required',
  },
  urlName: {
    type: String,
  },
  logoImageUrl: {
    type: String,
    default: 'modules/users/client/img/profile/default.png',
  },
  avg_review: {
    type: Number,
    default: 0,
  },
  reviews_length: {
    type: Number,
    default: 0,
  },
  price_reviews_length: {
    type: Number,
    default: 0,
  },
  panels_length: {
    type: Number,
    default: 0,
  },
  panel_manufacturers: [{
    type: String,
  }],
  panel_crystalline_types: [{
    type: String,
  }],
  panel_frame_colors: [{
    type: String,
  }],
  panel_number_of_cells: [{
    type: Number,
  }],
  panel_stcPowers: [{
    type: Number,
  }],
  panel_manufacturing_locations: [{
    type: String,
  }],
  manufacturers: [{
    type: String,
  }],
  isManufacturer: {
    type: Boolean,
    default: false,
  },
  industry: {
    type: String,
  },
  productTypes: {
    type: String,
  },
  url: {
    type: String,
    required: 'Company Website is required',
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  country: {
    type: String,
  },
  about: {
    type: String,
  },
  standardPaymentTerms: {
    type: String,
  },
  outsourceDelivery: {
    type: Boolean,
  },
  bankability: {
    type: String,
    enum: ['Tier-1', 'Tier-2', 'Tier-3', 'Bankrupt'],
  },
  leadTime: {
    type: String,
    enum: ['0-2', '2-4', '4-6', '6-10', '10-14', '>14'],
  },
})

export default OrganizationSchema
